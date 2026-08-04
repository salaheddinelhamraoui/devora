import LegalPage from "@/components/common/LegalPage";
import { company } from "@/lib/site";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      description="What data we collect, why we collect it, and how to have it removed."
      path="/privacy"
      updated="4 August 2026"
    >
      <h2>Who is responsible for your data</h2>
      <p>
        The data controller is <strong>{company.legalName}</strong>, trading as{" "}
        {company.tradingName}, {company.addressInline}. For any privacy question, write to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>The short version</h2>
      <p>
        We collect as little as possible: enough to deliver your purchase and answer your emails.
        We do not sell your data and we do not share it with anyone who is not directly involved in
        fulfilling your order.
      </p>

      <h2>What we collect and why</h2>
      <p>
        <strong>When you buy:</strong> your name, email address, country and order details. We need
        these to deliver the template, to issue receipts and to meet our tax and accounting
        obligations. Card details are collected and processed by our payment provider. They never
        reach our servers.
      </p>
      <p>
        <strong>When you email us:</strong> your email address and whatever you choose to tell us,
        kept for as long as needed to resolve your question.
      </p>
      <p>
        <strong>When you browse:</strong> anonymous, aggregated usage statistics such as which pages
        are visited. No advertising profiles are built from this.
      </p>

      <h2>Legal basis</h2>
      <p>
        Order data is processed to perform our contract with you. Accounting records are kept to
        comply with a legal obligation. Usage statistics and any marketing email rely on your
        consent, which you can withdraw at any time.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Order and invoice records are kept for as long as tax law requires. Support emails are kept
        for up to two years. Anything else is deleted when it is no longer needed, or sooner if you
        ask.
      </p>

      <h2>Who else sees it</h2>
      <p>
        Our payment provider processes the payment, and our email provider delivers your download
        link. Each receives only the data needed to perform that function. Some of these providers
        are based in the United States, and transfers are covered by standard contractual clauses
        or an equivalent safeguard.
      </p>

      <h2>Marketing email</h2>
      <p>
        We only send marketing email to people who explicitly opt in, and every message includes a
        one-click unsubscribe. Order and delivery emails are transactional and are always sent.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask for a copy of the data we hold about you, ask us to correct it, ask us to delete
        it, object to processing, or ask for it in a portable format. Email{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> and we will action the request
        within 30 days. If you are in the EU or the UK you also have the right to complain to your
        local data protection authority.
      </p>

      <h2>Cookies</h2>
      <p>
        We use only the cookies needed to make the site work and to count visits anonymously. No
        third-party advertising or tracking cookies are set.
      </p>

      <h2>Security</h2>
      <p>
        The site is served over HTTPS and access to order data is limited to the people who operate{" "}
        {company.tradingName}. No system is perfect, but we treat your data as if it were our own.
      </p>
    </LegalPage>
  );
}
