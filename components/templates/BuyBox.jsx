import Link from "next/link";

import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";

const GUARANTEES = [
  "Instant delivery by email",
  "One-time payment, lifetime updates",
  "Works on the free Notion plan",
  "Fully editable, nothing is locked",
];

export default function BuyBox({ template }) {
  const { title, price, compareAtPrice, discount, checkoutUrl, previewUrl, pages, highlights } =
    template;
  const hasCheckout = Boolean(checkoutUrl);

  return (
    <div className="card p-6 sm:p-7">
      <div className="flex items-end gap-3">
        <span className="font-display text-[2.6rem] leading-none text-ink">
          {formatPrice(price)}
        </span>
        {compareAtPrice ? (
          <span className="pb-1 text-base font-medium text-ink-soft line-through">
            {formatPrice(compareAtPrice)}
          </span>
        ) : null}
        {discount ? (
          <span className="mb-1.5 rounded-full bg-brand-100 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-brand-700">
            Save {discount}%
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-ink-muted">
        One-time payment{pages ? ` · ${pages}` : ""} · Instant download
      </p>
      <p className="mt-1 text-xs text-ink-soft">
        Price in euro (EUR). Any applicable tax is shown at checkout.
      </p>

      {highlights?.length ? (
        <ul className="mt-6 space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                className="mt-0.5 shrink-0 text-brand-500"
                aria-hidden="true"
              >
                <path
                  d="M4 12.5l5 5L20 6.5"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-7 space-y-3">
        {hasCheckout ? (
          <Button
            href={checkoutUrl}
            external
            variant="accent"
            size="lg"
            className="w-full"
          >
            Buy now for {formatPrice(price)}
          </Button>
        ) : (
          <>
            <button
              type="button"
              disabled
              className="btn btn-accent btn-lg w-full"
              aria-describedby="checkout-pending"
            >
              Checkout opening soon
            </button>
            <p id="checkout-pending" className="text-center text-xs text-ink-soft">
              This template goes on sale shortly.{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  `Notify me when ${title} is available`
                )}`}
                className="underline underline-offset-2 hover:text-ink"
              >
                Email us
              </a>{" "}
              to be notified.
            </p>
          </>
        )}

        {previewUrl ? (
          <Button href={previewUrl} external variant="ghost" size="lg" className="w-full">
            Live preview
          </Button>
        ) : null}
      </div>

      <ul className="mt-7 space-y-2 border-t border-ink/8 pt-6">
        {GUARANTEES.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[0.82rem] text-ink-muted">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cream-200 text-[0.65rem]">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[0.72rem] leading-relaxed text-ink-soft">
        {title} is a digital product delivered by email immediately after payment, so nothing is
        shipped. A free Notion account is required. By buying, you agree to the{" "}
        <Link href="/terms" className="underline underline-offset-2 hover:text-ink">
          terms
        </Link>
        ,{" "}
        <Link href="/delivery" className="underline underline-offset-2 hover:text-ink">
          delivery policy
        </Link>{" "}
        and{" "}
        <Link href="/refund" className="underline underline-offset-2 hover:text-ink">
          refund policy
        </Link>
        , and to immediate delivery of the template.
      </p>
    </div>
  );
}
