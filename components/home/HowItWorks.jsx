import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container-page mt-28 scroll-mt-24 sm:mt-36">
      <SectionHeading
        align="center"
        eyebrow="How it works"
        title="From checkout to organised in two minutes"
        body="No onboarding call, no setup fee, no waiting for a delivery. Three steps and the system is yours."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="relative card overflow-hidden p-7">
            <span className="font-display text-5xl leading-none text-brand-200">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
