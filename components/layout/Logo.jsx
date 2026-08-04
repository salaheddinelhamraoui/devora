import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Devora Kit home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-cream-50 transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
          <path
            d="M5 4.5h7.5a6.5 6.5 0 0 1 0 13H9V21"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M5 4.5V21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-[1.15rem] font-extrabold tracking-tight text-ink">
        Devora<span className="text-brand-500">Kit</span>
      </span>
    </Link>
  );
}
