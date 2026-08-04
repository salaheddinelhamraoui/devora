import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="container-page mt-28 sm:mt-36">
      <div className="relative overflow-hidden rounded-5xl bg-ink px-7 py-16 text-center sm:px-14 sm:py-20">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-pastel-rose/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream-50/70">
            One-time payment · No subscription
          </span>
          <h2 className="mt-6 font-display text-[2.2rem] font-normal leading-[1.1] text-cream-50 sm:text-5xl">
            Your workspace, sorted before your next deadline
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[0.98rem] leading-relaxed text-cream-50/70">
            Pick a template, duplicate it into Notion, and get on with the actual work. One payment,
            lifetime updates, no subscription.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/templates" variant="accent" size="lg">
              Shop the templates
            </Button>
            <Button
              href="/faq"
              size="lg"
              className="border border-cream-50/20 bg-transparent text-cream-50 hover:bg-cream-50/10"
            >
              Read the FAQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
