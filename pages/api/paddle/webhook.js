/**
 * Paddle webhook receiver — the only thing that actually delivers a purchase.
 *
 * Paddle sends `transaction.completed` once payment has settled. We verify the
 * signature, look up which template was bought, resolve the buyer's email, and
 * send them their duplication link.
 *
 * Secrets used here (PADDLE_WEBHOOK_SECRET, PADDLE_API_KEY, RESEND_API_KEY) are
 * server-only and must never gain a NEXT_PUBLIC_ prefix.
 */

import { createHmac, timingSafeEqual } from "crypto";

import { Environment, EventName, Paddle } from "@paddle/paddle-node-sdk";

import { getDeliveryForPriceId, sendDeliveryEmail } from "@/lib/delivery";
import { getPaddleEnvironment } from "@/lib/paddle-config";

export const config = {
  api: {
    // Signature verification runs over the exact bytes Paddle signed, so the
    // body must not be parsed or re-serialised before we see it.
    bodyParser: false,
  },
};

// How far out of date a webhook's timestamp may be before we reject it, which
// is what stops a captured request being replayed later. Paddle's own SDK uses
// 5 seconds; that is tight enough to fail on ordinary clock drift between
// Paddle and a serverless host, so we allow a more forgiving window.
const MAX_SIGNATURE_AGE_SECONDS = 60 * 5;

/**
 * Verifies the Paddle-Signature header against the raw body.
 *
 * Deliberately not using the SDK's Webhooks helper: it resolves its crypto
 * implementation through a runtime provider that only gets registered as a side
 * effect of constructing a Paddle client. Used standalone it finds no provider
 * and returns false for every signature — including real ones — which fails
 * closed and silently, so no customer would ever be sent their template.
 * Verifying here with node:crypto is explicit and has no such ordering trap.
 */
function isSignatureValid(rawBody, signatureHeader, secret) {
  const parts = String(signatureHeader).split(";");
  let ts = "";
  let h1 = "";

  for (const part of parts) {
    const [key, value] = part.split("=");
    if (key === "ts") ts = value;
    if (key === "h1") h1 = value;
  }

  if (!ts || !h1) return false;

  const timestamp = Number.parseInt(ts, 10);
  if (!Number.isFinite(timestamp)) return false;

  const ageSeconds = Math.abs(Date.now() / 1000 - timestamp);
  if (ageSeconds > MAX_SIGNATURE_AGE_SECONDS) return false;

  const expected = createHmac("sha256", secret).update(`${ts}:${rawBody}`, "utf8").digest();

  let received;
  try {
    received = Buffer.from(h1, "hex");
  } catch {
    return false;
  }

  // timingSafeEqual throws on a length mismatch, so guard before comparing.
  if (received.length !== expected.length) return false;

  return timingSafeEqual(expected, received);
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

/**
 * Paddle retries a webhook until it gets a 2xx, and can deliver the same event
 * more than once. Sending a customer two emails is not harmful, but it looks
 * sloppy, so recently handled event IDs are remembered here.
 *
 * This is per-instance memory: it stops rapid retries hitting the same warm
 * serverless instance, but it will not dedupe across instances or cold starts.
 * Move to a shared store (Vercel KV, Upstash, a DB table) once volume matters.
 */
const handledEvents = new Map();
const DEDUPE_TTL_MS = 10 * 60 * 1000;

function alreadyHandled(eventId) {
  const now = Date.now();

  for (const [id, seenAt] of handledEvents) {
    if (now - seenAt > DEDUPE_TTL_MS) handledEvents.delete(id);
  }

  return handledEvents.has(eventId);
}

// Recorded only after fulfilment succeeds. Marking on arrival instead would
// make a failed delivery permanent: Paddle's retry would be deduped away and
// the customer would never receive the template they paid for.
function markHandled(eventId) {
  handledEvents.set(eventId, Date.now());
}

async function resolveCustomerEmail(customerId) {
  // transaction.completed carries only customer_id, so the email needs a
  // lookup. This is the one place the server-side API key is required.
  const apiKey = process.env.PADDLE_API_KEY;

  if (!apiKey) {
    throw new Error(
      "PADDLE_API_KEY is not set, so the buyer's email address cannot be looked up. " +
        "Create a server-side API key in Paddle > Developer tools > Authentication."
    );
  }

  const paddle = new Paddle(apiKey, {
    environment:
      getPaddleEnvironment() === "production" ? Environment.production : Environment.sandbox,
  });

  const customer = await paddle.customers.get(customerId);

  if (!customer?.email) {
    throw new Error(`Paddle customer ${customerId} has no email address on record.`);
  }

  return customer.email;
}

// Raw webhook JSON, so these are snake_case — the camelCase form only exists on
// the SDK's parsed entities, which we no longer use.
async function fulfil(transaction) {
  // line_items is Paddle's source of truth for what was actually charged.
  const priceIds = (transaction.details?.line_items ?? [])
    .map((item) => item.price_id)
    .filter(Boolean);

  if (priceIds.length === 0) {
    throw new Error(`Transaction ${transaction.id} completed with no line items.`);
  }

  const email = await resolveCustomerEmail(transaction.customer_id);

  // An order can contain more than one template; each gets its own email.
  for (const priceId of priceIds) {
    const delivery = getDeliveryForPriceId(priceId);

    if (!delivery) {
      // Deliberately loud: a paid order we cannot fulfil needs a human, and
      // usually means a price ID is missing from the MDX frontmatter.
      console.error(
        `[paddle] transaction ${transaction.id} paid for price ${priceId}, which matches no ` +
          "template. Add its paddlePriceId to content/templates/*.mdx, then resend by hand."
      );
      continue;
    }

    await sendDeliveryEmail({ to: email, delivery });
    console.log(`[paddle] delivered '${delivery.slug}' for transaction ${transaction.id}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const signature = req.headers["paddle-signature"];
  const secret = process.env.PADDLE_WEBHOOK_SECRET;

  if (!secret) {
    console.error("[paddle] PADDLE_WEBHOOK_SECRET is not set; refusing to trust this request.");
    return res.status(500).json({ error: "Webhook not configured" });
  }

  if (!signature) {
    return res.status(400).json({ error: "Missing Paddle-Signature header" });
  }

  const rawBody = await readRawBody(req);

  if (!isSignatureValid(rawBody, signature, secret)) {
    // An unverifiable body is either a misconfigured secret or someone probing
    // the endpoint. Either way it never reaches fulfilment.
    console.error("[paddle] signature verification failed");
    return res.status(401).json({ error: "Invalid signature" });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: "Malformed JSON body" });
  }

  if (event.event_type !== EventName.TransactionCompleted) {
    // Everything else is acknowledged so Paddle stops retrying it.
    return res.status(200).json({ received: true, ignored: event.event_type });
  }

  if (alreadyHandled(event.event_id)) {
    return res.status(200).json({ received: true, deduped: true });
  }

  try {
    await fulfil(event.data);
    markHandled(event.event_id);
  } catch (error) {
    // 500 makes Paddle retry, which is what we want: the customer has paid and
    // is waiting. Retries are safe because delivery is a fresh email each time.
    console.error(`[paddle] fulfilment failed for event ${event.event_id}:`, error);
    return res.status(500).json({ error: "Fulfilment failed" });
  }

  return res.status(200).json({ received: true });
}
