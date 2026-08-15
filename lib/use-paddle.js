import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";

import { getPaddleClientToken, getPaddleEnvironment } from "./paddle-config";
import { formatPrice } from "./format";

// Paddle.js is a singleton on the page. Sharing one in-flight promise across
// every component keeps a page with several Buy buttons from initialising it
// once per button.
let paddlePromise = null;

function loadPaddle() {
  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      environment: getPaddleEnvironment(),
      token: getPaddleClientToken(),
    }).catch((error) => {
      // Let the next caller retry instead of caching a rejected promise forever.
      paddlePromise = null;
      throw error;
    });
  }

  return paddlePromise;
}

/**
 * Returns the initialised Paddle instance, or null until it is ready.
 * `error` is set if Paddle could not be initialised at all — usually a missing
 * env var, which we surface rather than swallow.
 *
 * Pass `enabled: false` to skip loading Paddle.js entirely. Templates still on
 * the old checkout link have nothing to open, so there is no reason to pull
 * down the script or touch the env vars for them.
 */
export function usePaddle(enabled = true) {
  const [paddle, setPaddle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) return undefined;

    let cancelled = false;

    loadPaddle()
      .then((instance) => {
        // Stored via an updater callback on purpose. React treats a bare
        // function passed to a setter as a state updater and would invoke the
        // Paddle instance instead of storing it, leaving the state undefined
        // and the Buy button disabled forever.
        if (!cancelled) setPaddle(() => instance ?? null);
      })
      .catch((cause) => {
        if (!cancelled) setError(cause);
        console.error("[paddle] initialisation failed:", cause);
      });

    return () => {
      cancelled = true;
    };
  }, [enabled]);

  return { paddle, error };
}

/**
 * Localised price for a single price ID, as a preformatted string from Paddle.
 *
 * We never do arithmetic on or reformat what Paddle returns — `formattedTotals`
 * is already localised for the buyer's country, including their currency,
 * separators and tax treatment. No country code is passed: with no request
 * headers available on a statically generated page, PricePreview geolocates
 * from the visitor's IP, which is more accurate than anything we could infer.
 */
export function usePaddlePrice(paddle, priceId) {
  const [formattedTotal, setFormattedTotal] = useState(null);

  useEffect(() => {
    if (!paddle || !priceId) return undefined;

    let cancelled = false;

    paddle
      .PricePreview({ items: [{ priceId, quantity: 1 }] })
      .then((preview) => {
        if (cancelled) return;

        const lineItem = preview?.data?.details?.lineItems?.[0];
        const total = lineItem?.formattedTotals?.total;

        if (total) setFormattedTotal(total);
      })
      .catch((error) => {
        // A failed preview is not fatal: the page keeps showing the base price
        // from the MDX frontmatter, and checkout still works.
        console.error("[paddle] price preview failed:", error);
      });

    return () => {
      cancelled = true;
    };
  }, [paddle, priceId]);

  return formattedTotal;
}

/**
 * Everything the buy controls need for one template.
 *
 * Called once per page and passed down, so a page with both a BuyBox and a
 * sticky mobile bar still makes a single PricePreview request.
 *
 * A template without a paddlePriceId falls back to its existing checkoutUrl, so
 * the store keeps selling while price IDs are filled in one at a time.
 */
export function useTemplateCheckout(template) {
  const priceId = template.paddlePriceId;
  const usesPaddle = Boolean(priceId);

  const { paddle, error } = usePaddle(usesPaddle);
  const formattedTotal = usePaddlePrice(paddle, priceId);

  const isReady = usesPaddle ? Boolean(paddle) : Boolean(template.checkoutUrl);

  function openCheckout() {
    if (!paddle || !priceId) return;

    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        theme: "light",
        // Absolute URL, derived from the current origin so localhost, preview
        // deployments and production each redirect back to themselves.
        successUrl: `${window.location.origin}/welcome`,
      },
      // There is no sign-in on this site yet, so there is no email to prefill.
      // When accounts land, pass `customer: { email }` here.
    });
  }

  return {
    usesPaddle,
    isReady,
    error,
    openCheckout,
    // Paddle's localised, preformatted total once it has loaded; otherwise the
    // base EUR price from the frontmatter. Never combined, never recalculated.
    displayPrice: formattedTotal ?? formatPrice(template.price),
    isLocalised: Boolean(formattedTotal),
  };
}
