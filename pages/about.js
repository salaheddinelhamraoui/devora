import Seo from "@/components/common/Seo";
import PageHeader from "@/components/common/PageHeader";
import CtaBanner from "@/components/home/CtaBanner";
import { benefits, company } from "@/lib/site";

const STATS = [
  { value: "4", label: "Templates in the shop" },
  { value: "2 min", label: "Average setup time" },
  { value: "€0", label: "Subscription cost, forever" },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Devora Kit designs Notion templates that people actually keep using: complete, connected systems rather than pretty empty pages."
        path="/about"
      />
      <PageHeader
        eyebrow="About"
        title="We build the workspace we wanted"
        body="Devora Kit started because every template we bought looked incredible in the screenshots and fell apart the moment we tried to use it for real work."
      />

      <section className="container-page mt-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="prose-kit max-w-none">
            <h2>Pretty is not the same as usable</h2>
            <p>
              Most Notion templates are built to photograph well. They have a beautiful cover
              image, a handful of disconnected databases, and no answer for what happens in week
              six when you have forty tasks and three deadlines in the same afternoon.
            </p>
            <p>
              We build the other kind. Every Devora Kit template is a connected system: the task
              you create shows up in your calendar, your project page and your weekly overview
              without you touching it twice. The design stays calm so you can read it at 11pm, and
              nothing is locked, so you can bend it to how you already work.
            </p>

            <h2>What we believe</h2>
            <p>
              <strong>You should own what you buy.</strong> One payment, no subscription, no
              renewal email in twelve months. When we improve a template you already own, you get
              the update for free.
            </p>
            <p>
              <strong>Setup should take minutes, not weekends.</strong> If a template needs a
              tutorial series before it is useful, it is not finished. Duplicate it and it works.
            </p>
            <p>
              <strong>Support should come from a person.</strong> Email us and a human replies,
              usually the same person who built the template you are asking about.
            </p>

            <h2>The company behind the shop</h2>
            <p>
              {company.tradingName} is the trading name of <strong>{company.legalName}</strong>, a{" "}
              {company.registration.toLowerCase()}, registered at {company.addressInline}. All
              orders, invoices and support are handled by that company, and you can reach it at{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </div>

          <div className="space-y-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="card p-6">
                <p className="font-display text-4xl leading-none text-ink">{stat.value}</p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-200 text-xl">
                {benefit.emoji}
              </span>
              <h3 className="mt-4 text-base font-bold tracking-tight text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{benefit.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
