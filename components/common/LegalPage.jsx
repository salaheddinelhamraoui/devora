import Seo from "./Seo";
import PageHeader from "./PageHeader";

export default function LegalPage({ title, description, path, updated, children }) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageHeader eyebrow="Legal" title={title} body={description} />

      <section className="container-page mt-12">
        <div className="card max-w-3xl p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Last updated: {updated}
          </p>
          <div className="prose-kit mt-8">{children}</div>
        </div>
      </section>
    </>
  );
}
