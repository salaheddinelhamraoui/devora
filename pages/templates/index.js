import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import Seo from "@/components/common/Seo";
import TemplateGrid from "@/components/templates/TemplateGrid";
import CtaBanner from "@/components/home/CtaBanner";
import { getAllTemplates, getCategories } from "@/lib/templates";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "A to Z" },
];

export default function TemplatesIndex({ templates, categories }) {
  const router = useRouter();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    if (!router.isReady) return;
    const queryCategory = router.query.category;
    setCategory(typeof queryCategory === "string" ? queryCategory : "All");
  }, [router.isReady, router.query.category]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();

    const filtered = templates.filter((template) => {
      const matchesCategory = category === "All" || template.category === category;
      const matchesQuery =
        !term ||
        [template.title, template.tagline, template.description, template.category]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesQuery;
    });

    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.title.localeCompare(b.title));

    return sorted;
  }, [templates, category, query, sort]);

  const selectCategory = (name) => {
    setCategory(name);
    const nextQuery = name === "All" ? {} : { category: name };
    router.replace({ pathname: "/templates", query: nextQuery }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const filters = ["All", ...categories.map((item) => item.name)];

  return (
    <>
      <Seo
        title="All Notion templates"
        description="Browse every Devora Kit Notion template: student planners, budget trackers and project management systems. Instant download, one-time payment."
        path="/templates"
      />

      <section className="container-page pt-14 sm:pt-20">
        <div className="max-w-2xl">
          <span className="eyebrow">The shop</span>
          <h1 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl">
            All templates
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {templates.length} complete Notion systems. Every one is unlocked, editable and yours
            forever after a single payment.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-y border-ink/8 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
            {filters.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => selectCategory(name)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === name
                    ? "bg-ink text-cream-50"
                    : "border border-ink/10 bg-white/60 text-ink-muted hover:border-ink/20 hover:text-ink"
                }`}
                aria-pressed={category === name}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative block">
              <span className="sr-only">Search templates</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
              >
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search templates"
                className="w-full rounded-full border border-ink/10 bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft focus:border-ink/25 focus:outline-none focus:ring-2 focus:ring-brand-200 sm:w-56"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Sort templates</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="w-full appearance-none rounded-full border border-ink/10 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-ink focus:border-ink/25 focus:outline-none focus:ring-2 focus:ring-brand-200 sm:w-48"
              >
                {SORTS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-soft">
          Showing {visible.length} of {templates.length} templates
        </p>

        <div className="mt-8">
          <TemplateGrid templates={visible} priorityCount={3} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      templates: getAllTemplates(),
      categories: getCategories(),
    },
  };
}
