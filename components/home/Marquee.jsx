const ITEMS = [
  "Instant download",
  "One-time payment",
  "Lifetime updates",
  "Works on free Notion",
  "Fully editable",
  "Mobile ready",
  "Beginner friendly",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="mt-16 overflow-hidden border-y border-ink/8 bg-white/50 py-4">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft"
          >
            {item}
            <span className="text-brand-400" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
