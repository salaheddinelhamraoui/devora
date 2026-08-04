import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import Seo from "@/components/common/Seo";
import Gallery from "@/components/templates/Gallery";
import BuyBox from "@/components/templates/BuyBox";
import TemplateGrid from "@/components/templates/TemplateGrid";
import FaqAccordion from "@/components/home/FaqAccordion";
import SectionHeading from "@/components/home/SectionHeading";
import Button from "@/components/ui/Button";
import { getRelatedTemplates, getTemplate, getTemplateSlugs } from "@/lib/templates";
import { company, faqs, site } from "@/lib/site";
import { formatPrice } from "@/lib/format";

export default function TemplateDetail({ template, mdxSource, related }) {
  const {
    title,
    tagline,
    description,
    category,
    badge,
    accent,
    images,
    modules,
    perfectFor,
    price,
    compareAtPrice,
    checkoutUrl,
    slug,
  } = template;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    image: images.map((image) => `${site.url}${image}`),
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: Number(price).toFixed(2),
      priceCurrency: site.currency,
      availability: "https://schema.org/InStock",
      url: `${site.url}/templates/${slug}`,
      seller: { "@type": "Organization", name: company.legalName },
    },
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={images[0]}
        path={`/templates/${slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="container-page pt-8">
        <nav aria-label="Breadcrumb" className="text-xs font-medium text-ink-soft">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/templates" className="hover:text-ink">
                Templates
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{title}</li>
          </ol>
        </nav>
      </div>

      <section className="container-page mt-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* min-w-0 stops the thumbnail strip's intrinsic width from blowing
              out the grid column on narrow screens */}
          <div className="min-w-0">
            <Gallery images={images} title={title} accent={accent} />
          </div>

          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cream-200 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
                {category}
              </span>
              {badge ? (
                <span className="rounded-full bg-ink px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-cream-50">
                  {badge}
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 font-display text-[2.3rem] font-normal leading-[1.08] tracking-tight text-ink sm:text-[3rem]">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{tagline}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">⚡</span> Instant delivery
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">🔓</span> One-time payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">🎨</span> Fully editable
              </span>
            </div>

            <div className="mt-8">
              <BuyBox template={template} />
            </div>
          </div>
        </div>
      </section>

      {modules?.length ? (
        <section className="container-page mt-24 sm:mt-32">
          <SectionHeading
            eyebrow="What's inside"
            title={`Everything included in the ${title}`}
            body={description}
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div key={module.title} className="card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-200 text-xl">
                  {module.emoji}
                </span>
                <h3 className="mt-4 text-base font-bold tracking-tight text-ink">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{module.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-page mt-24 sm:mt-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="prose-kit min-w-0 max-w-none">
            <MDXRemote {...mdxSource} />
          </div>

          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            {perfectFor?.length ? (
              <div className={`rounded-3xl ${accent} p-6 ring-1 ring-ink/8`}>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
                  Perfect for
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {perfectFor.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                      <span aria-hidden="true">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="card mt-4 p-6">
              <p className="text-sm leading-relaxed text-ink-muted">
                Not sure if this is the right template for you?
              </p>
              <Button href="/contact" variant="ghost" size="md" className="mt-4 w-full">
                Ask us anything
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section id="faq" className="container-page mt-24 scroll-mt-24 sm:mt-32">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title="Before you buy" />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {related?.length ? (
        <section className="container-page mt-24 sm:mt-32">
          <SectionHeading
            eyebrow="Keep browsing"
            title="You might also like"
            action={{ href: "/templates", label: "View all templates" }}
          />
          <div className="mt-12">
            <TemplateGrid templates={related} />
          </div>
        </section>
      ) : null}

      <div className="sticky bottom-0 z-40 mt-24 border-t border-ink/10 bg-cream/90 px-5 py-3 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold leading-tight text-ink">{title}</p>
            <p className="text-sm text-ink-muted">
              <span className="font-bold text-ink">{formatPrice(price)}</span>
              {compareAtPrice ? (
                <span className="ml-2 line-through">{formatPrice(compareAtPrice)}</span>
              ) : null}
            </p>
          </div>
          {checkoutUrl ? (
            <Button href={checkoutUrl} external variant="accent" size="md">
              Buy now
            </Button>
          ) : (
            <button type="button" disabled className="btn btn-accent btn-md">
              Coming soon
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: getTemplateSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { template, mdxSource } = await getTemplate(params.slug);

  return {
    props: {
      template,
      mdxSource,
      related: getRelatedTemplates(params.slug, 3),
    },
  };
}
