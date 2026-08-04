export default function PageHeader({ eyebrow, title, body }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-gradient-to-b from-brand-100/60 via-cream to-cream"
        aria-hidden="true"
      />
      <div className="container-page relative pt-14 sm:pt-20">
        <div className="max-w-2xl">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {title}
          </h1>
          {body ? (
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{body}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
