import Link from "next/link";

export default function SectionHeading({ eyebrow, title, body, action, align = "left" }) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-5 ${
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-xl"}>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="mt-4 font-display text-[2.1rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.75rem]">
          {title}
        </h2>
        {body ? (
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{body}</p>
        ) : null}
      </div>

      {action ? (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink hover:text-brand-600"
        >
          {action.label}
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : null}
    </div>
  );
}
