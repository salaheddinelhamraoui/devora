import Seo from "@/components/common/Seo";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." />

      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-[6rem] leading-none text-brand-200 sm:text-[9rem]">
          404
        </span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
          This page went missing
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
          The link may be old, or the page may have moved. The templates are all still here.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/templates" variant="primary" size="lg">
            Browse templates
          </Button>
          <Button href="/" variant="ghost" size="lg">
            Back home
          </Button>
        </div>
      </section>
    </>
  );
}
