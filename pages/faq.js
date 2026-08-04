import Seo from "@/components/common/Seo";
import PageHeader from "@/components/common/PageHeader";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { faqs } from "@/lib/site";

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Everything you need to know about buying, downloading and using Devora Kit Notion templates."
        path="/faq"
      />
      <PageHeader
        eyebrow="FAQ"
        title="Questions & answers"
        body="How delivery works, what you can do with the templates, and what happens if something goes wrong."
      />

      <section className="container-page mt-12">
        <div className="max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
