import { benefits } from "@/lib/site";

export default function Benefits() {
  return (
    <section className="container-page mt-24 sm:mt-32">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="card p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-200 text-xl">
              {benefit.emoji}
            </span>
            <h3 className="mt-4 text-base font-bold tracking-tight text-ink">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{benefit.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
