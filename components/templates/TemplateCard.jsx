import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/lib/format";

export default function TemplateCard({ template, priority = false }) {
  const { slug, title, tagline, category, badge, accent, price, compareAtPrice, discount, images } =
    template;

  return (
    <article className="group relative flex flex-col">
      <Link href={`/templates/${slug}`} className="flex flex-col focus-visible:outline-none">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${accent} shadow-soft ring-1 ring-ink/8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lift`}
        >
          {images[0] ? (
            <Image
              src={images[0]}
              alt={title}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              priority={priority}
            />
          ) : null}

          {badge ? (
            <span className="absolute left-4 top-4 rounded-full bg-ink/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-cream-50 backdrop-blur">
              {badge}
            </span>
          ) : null}

          {discount ? (
            <span className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white">
              −{discount}%
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex flex-1 flex-col px-1">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink-soft">
            {category}
          </span>
          <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand-600">
            {title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-muted">{tagline}</p>

          <div className="mt-4 flex items-center gap-2.5">
            <span className="text-lg font-extrabold text-ink">{formatPrice(price)}</span>
            {compareAtPrice ? (
              <span className="text-sm font-medium text-ink-soft line-through">
                {formatPrice(compareAtPrice)}
              </span>
            ) : null}
            <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-ink transition-transform duration-200 group-hover:translate-x-0.5">
              View
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
