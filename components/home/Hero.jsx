import Image from "next/image";

import Button from "@/components/ui/Button";

export default function Hero({ templates }) {
  const showcase = templates.slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-[520px] bg-gradient-to-b from-brand-100/70 via-cream to-cream"
        aria-hidden="true"
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-page relative pb-4 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            Notion templates, done properly
          </span>

          <h1 className="animate-fade-up mt-7 font-display text-[2.8rem] font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
            Templates you will
            <span className="relative mx-2 inline-block">
              <span className="relative z-10">actually</span>
              <span
                className="absolute inset-x-0 bottom-1.5 z-0 h-3 rounded-full bg-pastel-butter sm:h-4"
                aria-hidden="true"
              />
            </span>
            keep using
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Devora Kit builds Notion systems for students, freelancers and small teams. Buy once,
            duplicate in seconds, and stop rebuilding your workspace every semester.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/templates" variant="primary" size="lg">
              Browse all templates
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href="#how-it-works" variant="ghost" size="lg">
              How it works
            </Button>
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
            Instant download · One-time payment · Free Notion plan friendly
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <div className="grid gap-5 sm:grid-cols-3">
            {showcase.map((template, index) => (
              <div
                key={template.slug}
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${
                  template.accent
                } shadow-lift ring-1 ring-ink/8 ${
                  index === 1 ? "sm:-translate-y-6" : index === 2 ? "sm:translate-y-3" : ""
                }`}
              >
                <Image
                  src={template.images[0]}
                  alt={template.title}
                  fill
                  sizes="(max-width: 640px) 92vw, 32vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
