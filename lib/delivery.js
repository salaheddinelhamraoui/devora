/**
 * SERVER ONLY — fulfilment for completed Paddle transactions.
 *
 * This module handles the private Notion duplication links and the Resend API
 * key. Importing it from a component would leak both into the browser bundle,
 * so it is only ever reached from pages/api/*.
 */

import { getTemplatesWithPrivateFields } from "./templates";
import { site, company } from "./site";

function requireEnv(name, hint) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set. ${hint}`);
  return value;
}

/**
 * Finds the template a Paddle price ID belongs to.
 * Returns null for an unrecognised price, which the caller treats as a
 * fulfilment failure worth alerting on rather than a silent no-op.
 */
export function getDeliveryForPriceId(priceId) {
  const template = getTemplatesWithPrivateFields().find(
    (item) => item.paddlePriceId && item.paddlePriceId === priceId
  );

  if (!template) return null;

  if (!template.notionUrl) {
    throw new Error(
      `Template '${template.slug}' matched price ${priceId} but has no notionUrl, ` +
        "so there is nothing to deliver. Add notionUrl to its frontmatter."
    );
  }

  return {
    slug: template.slug,
    title: template.title,
    notionUrl: template.notionUrl,
  };
}

function buildEmail({ title, notionUrl }) {
  const subject = `Your ${title} is ready to duplicate`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
                max-width:520px;margin:0 auto;padding:32px 24px;color:#241f1c;line-height:1.6;">
      <h1 style="font-size:22px;margin:0 0 16px;">Thank you for your order</h1>

      <p style="margin:0 0 16px;">
        Your copy of <strong>${title}</strong> is ready. Open the link below and press
        <strong>Duplicate</strong> in the top right to copy it into your own Notion workspace.
      </p>

      <p style="margin:0 0 28px;">
        <a href="${notionUrl}"
           style="display:inline-block;background:#241f1c;color:#fffdf8;text-decoration:none;
                  padding:13px 24px;border-radius:999px;font-weight:600;">
          Open your template
        </a>
      </p>

      <p style="margin:0 0 16px;font-size:14px;color:#6b625c;">
        This link is personal to your order. Please don't share or republish it — it is covered by
        the personal-use licence at ${site.url}/license.
      </p>

      <p style="margin:0 0 16px;font-size:14px;color:#6b625c;">
        Anything not working? Just reply to this email and a human will help.
      </p>

      <hr style="border:none;border-top:1px solid #e8e1d8;margin:28px 0 16px;">

      <p style="margin:0;font-size:12px;color:#9a908a;">
        ${company.legalName} — ${company.addressInline}
      </p>
    </div>
  `;

  const text = [
    `Thank you for your order.`,
    ``,
    `Your copy of ${title} is ready. Open the link below and press Duplicate in the`,
    `top right to copy it into your own Notion workspace.`,
    ``,
    notionUrl,
    ``,
    `This link is personal to your order. Please don't share or republish it — it is`,
    `covered by the personal-use licence at ${site.url}/license.`,
    ``,
    `Anything not working? Just reply to this email and a human will help.`,
    ``,
    `${company.legalName} — ${company.addressInline}`,
  ].join("\n");

  return { subject, html, text };
}

/**
 * Sends the duplication link via Resend's REST API.
 * Called directly rather than through their SDK to avoid another dependency —
 * swapping providers means changing this one function.
 */
export async function sendDeliveryEmail({ to, delivery }) {
  const apiKey = requireEnv("RESEND_API_KEY", "Create one at https://resend.com/api-keys.");
  const from = requireEnv(
    "DELIVERY_FROM_EMAIL",
    "Set it to a sender on a domain you have verified in Resend."
  );

  const { subject, html, text } = buildEmail(delivery);
  const bcc = process.env.DELIVERY_BCC_EMAIL;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: site.email,
      subject,
      html,
      text,
      ...(bcc ? { bcc: [bcc] } : {}),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend rejected the delivery email (${response.status}): ${body}`);
  }

  return response.json();
}
