import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/8 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-cream-100 sm:px-7"
              >
                <span className="text-[0.98rem] font-semibold text-ink">{item.q}</span>
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-transform duration-200 ${
                    isOpen ? "rotate-45 bg-ink text-cream-50" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            {isOpen ? (
              <div className="px-6 pb-6 sm:px-7">
                <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">{item.a}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
