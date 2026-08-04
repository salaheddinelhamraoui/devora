import Link from "next/link";

import SectionHeading from "./SectionHeading";

const CATEGORY_STYLES = {
  Students: { accent: "bg-pastel-sky", emoji: "🎓" },
  Finance: { accent: "bg-pastel-mint", emoji: "💰" },
  Business: { accent: "bg-pastel-butter", emoji: "🗂️" },
  Productivity: { accent: "bg-pastel-lilac", emoji: "⚡" },
};

export default function Categories({ categories }) {
  return (
    <section className="container-page mt-28 sm:mt-36">
      <SectionHeading
        eyebrow="Collections"
        title="Find the system for your kind of chaos"
        action={{ href: "/templates", label: "See everything" }}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const style = CATEGORY_STYLES[category.name] ?? {
            accent: "bg-pastel-peach",
            emoji: "✨",
          };

          return (
            <Link
              key={category.name}
              href={`/templates?category=${encodeURIComponent(category.name)}`}
              className={`group flex flex-col justify-between rounded-3xl ${style.accent} p-6 ring-1 ring-ink/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift`}
            >
              <span className="text-2xl" aria-hidden="true">
                {style.emoji}
              </span>
              <div className="mt-10">
                <h3 className="text-lg font-bold tracking-tight text-ink">{category.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {category.count} {category.count === 1 ? "template" : "templates"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
