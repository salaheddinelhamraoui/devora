import Head from "next/head";

import Seo from "@/components/common/Seo";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "Check your inbox",
    body: "Your duplication link is on its way to the email address you used at checkout. It usually lands within a minute.",
  },
  {
    number: "02",
    title: "Open the link",
    body: "It opens your template in Notion, in read-only preview. Nothing is added to your workspace yet.",
  },
  {
    number: "03",
    title: "Press Duplicate",
    body: "Top right of the page. The whole workspace is copied into your own Notion account, and it is yours to edit.",
  },
];

export default function Welcome() {
  return (
    <>
      <Seo
        title="Thank you for your order"
        description="Your Notion template is on its way to your inbox."
        path="/welcome"
      />
      <Head>
        {/* A receipt page has no business in search results. */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pastel-mint text-3xl ring-1 ring-ink/8">
            <span aria-hidden="true">✓</span>
          </span>

          <h1 className="mt-7 font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-[3.4rem]">
            Payment received. Thank you.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Your receipt is already in your inbox, and your template link is right behind it.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.number} className="card p-6">
              <span className="font-display text-2xl text-brand-300">{step.number}</span>
              <h2 className="mt-3 text-base font-bold tracking-tight text-ink">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <div className="card p-6 sm:p-7">
            <h2 className="text-base font-bold tracking-tight text-ink">
              Nothing in your inbox after a few minutes?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Check your spam and promotions folders first — automated emails often land there. If
              it is still missing, email us and we will resend it by hand.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  "My template link has not arrived"
                )}`}
                external
                variant="primary"
                size="lg"
              >
                Email support
              </Button>
              <Button href="/templates" variant="ghost" size="lg">
                Browse more templates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
