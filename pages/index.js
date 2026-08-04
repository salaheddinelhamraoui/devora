import Seo from "@/components/common/Seo";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Benefits from "@/components/home/Benefits";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import FaqAccordion from "@/components/home/FaqAccordion";
import SectionHeading from "@/components/home/SectionHeading";
import CtaBanner from "@/components/home/CtaBanner";
import TemplateGrid from "@/components/templates/TemplateGrid";
import { getAllTemplates, getCategories } from "@/lib/templates";
import { faqs } from "@/lib/site";

export default function Home({ templates, categories }) {
  return (
    <>
      <Seo />

      <Hero templates={templates} />
      <Marquee />

      <section className="container-page mt-24 sm:mt-32">
        <SectionHeading
          eyebrow="The shop"
          title="Every template, ready to duplicate"
          body="Each one is a complete, connected system, not a pretty page with three empty databases behind it."
          action={{ href: "/templates", label: "View all templates" }}
        />

        <div className="mt-12">
          <TemplateGrid templates={templates} priorityCount={3} />
        </div>
      </section>

      <Benefits />
      <Categories categories={categories} />
      <HowItWorks />

      <section className="container-page mt-28 sm:mt-36">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered before you ask"
            body="Still unsure about something? Email us and a human replies."
          />
          <FaqAccordion items={faqs.slice(0, 5)} />
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
