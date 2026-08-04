import Link from "next/link";

import LegalPage from "@/components/common/LegalPage";
import { company } from "@/lib/site";

export default function Refund() {
  return (
    <LegalPage
      title="Refund policy"
      description="When a purchase can be refunded, when it cannot, and how to make a request."
      path="/refund"
      updated="4 August 2026"
    >
      <h2>The short version</h2>
      <p>
        Our templates are digital products delivered in full the moment you open your duplication
        link, so sales are final once delivery has started. If something genuinely went wrong with
        your order, we fix it or refund you.
      </p>

      <h2>Right of withdrawal for consumers</h2>
      <p>
        If you are a consumer in the EU or the UK, you normally have 14 days to withdraw from a
        distance purchase. For digital content supplied immediately, that right ends once supply
        has begun with your express consent. At checkout you consent to immediate delivery and
        acknowledge the loss of that right.
      </p>
      <p>
        If you have paid but have <strong>not</strong> yet opened your duplication link, your
        withdrawal right is intact. Contact us within 14 days of purchase and we will refund you in
        full.
      </p>

      <h2>Refunds we always give</h2>
      <p>
        <strong>Your link never arrived</strong> and we cannot deliver it to you. <br />
        <strong>The template does not work</strong>, will not duplicate, or a page is broken or
        missing and we cannot repair it. <br />
        <strong>You were charged twice</strong> or bought the same template twice by accident.{" "}
        <br />
        <strong>You were charged without authorisation.</strong>
      </p>
      <p>
        Contact us within 14 days of the charge with your order email and a short description of
        the problem. Approved refunds are issued to the original payment method within 5 to 10
        business days.
      </p>

      <h2>Refunds we cannot give</h2>
      <p>
        We cannot refund a delivered template because you changed your mind, because you decided
        not to use it, or because you would prefer a different template from the shop. We also
        cannot refund a purchase where the licence has been breached, for example where the
        duplication link has been shared or resold.
      </p>

      <h2>Before you buy</h2>
      <p>
        Every product page lists all the dashboards and databases included and shows preview images
        of the real pages. If anything is unclear, email us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> before purchasing and we will answer
        honestly, including telling you when a template is not right for you.
      </p>

      <h2>How to request a refund</h2>
      <p>
        Send an email to <a href={`mailto:${company.email}`}>{company.email}</a> with the subject
        line &quot;Refund request&quot;, the email address used at checkout, and what went wrong. We
        respond
        within one working day and resolve every request within 14 days.
      </p>
      <p>
        Refunds are issued by {company.legalName}, {company.addressInline}. See also the{" "}
        <Link href="/delivery">delivery policy</Link> and the{" "}
        <Link href="/terms">terms of service</Link>.
      </p>

      <h2>Statutory rights</h2>
      <p>
        Nothing in this policy limits rights you have under the consumer law of your country.
      </p>
    </LegalPage>
  );
}
