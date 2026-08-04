import Seo from "@/components/common/Seo";
import PageHeader from "@/components/common/PageHeader";
import { company, site } from "@/lib/site";

const TOPICS = [
  {
    emoji: "📥",
    title: "Order and delivery",
    body: "Did not receive your link, or the duplicate button is not working? Send us the email address used at checkout and we will resend it.",
  },
  {
    emoji: "🛠️",
    title: "Using a template",
    body: "Stuck on a database, a view or a formula? Describe what you are trying to do and we will walk you through it.",
  },
  {
    emoji: "💼",
    title: "Custom and bulk",
    body: "Need a template adapted for your team, or licences for a group? Tell us the scope and we will send a quote.",
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Contact ${company.legalName}, the company behind ${site.name}, about an order, a template or a custom build.`}
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Talk to a human"
        body="We answer every email ourselves, usually within one working day."
      />

      <section className="container-page mt-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card flex flex-col justify-between p-7 sm:p-9">
            <div>
              <h2 className="font-display text-3xl leading-tight text-ink">Email us</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                The fastest way to reach us. Include your order email if your question is about a
                purchase, and we will get to it quicker.
              </p>
            </div>

            <div className="mt-8">
              <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg w-full sm:w-auto">
                {site.email}
              </a>
              <p className="mt-4 text-xs text-ink-soft">
                Typical reply time: under 24 hours, Monday to Friday.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {TOPICS.map((topic) => (
              <div key={topic.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream-200 text-xl">
                    {topic.emoji}
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-ink">{topic.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{topic.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-6">
        <div className="card p-7 sm:p-9">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
            Business details
          </h2>
          <div className="mt-5 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold text-ink">Registered company</h3>
              <address className="mt-2 text-sm not-italic leading-relaxed text-ink-muted">
                {company.legalName}
                <br />
                trading as {company.tradingName}
                <br />
                {company.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink">Registration</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {company.registration}.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink">Customer service</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-ink underline underline-offset-4"
                >
                  {company.email}
                </a>
                <br />
                Monday to Friday, replies within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
