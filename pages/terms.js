import Link from "next/link";

import LegalPage from "@/components/common/LegalPage";
import { company, site } from "@/lib/site";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of service"
      description="The terms that apply when you browse this website or buy a template from us."
      path="/terms"
      updated="4 August 2026"
    >
      <h2>Who you are contracting with</h2>
      <p>
        This website is operated by <strong>{company.legalName}</strong>, trading as{" "}
        {company.tradingName}, a {company.registration.toLowerCase()}, with its registered address
        at {company.addressInline}. You can contact us at any time at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
      <p>
        By using this website or placing an order you agree to these terms. If you do not agree,
        please do not use the site.
      </p>

      <h2>What we sell</h2>
      <p>
        We sell digital templates for Notion. A template is a pre-built set of pages and databases
        that you copy into your own Notion workspace using a private link. Nothing physical is
        shipped and no software is installed on your device. A free Notion account is required to
        use any product sold here.
      </p>
      <p>
        Every product page lists the dashboards and databases the template contains, and the
        preview images show real pages from the product.
      </p>

      <h2>Prices and payment</h2>
      <p>
        All prices are displayed in euro (EUR) and are charged as a single one-time payment. Any
        applicable tax is calculated and shown at checkout before you confirm your order. Payment is
        processed by our payment provider. We never receive or store your card details.
      </p>
      <p>
        A contract between you and {company.legalName} is formed when we confirm your order by
        email. If a product is listed at an incorrect price we may cancel the order and refund you
        in full.
      </p>

      <h2>Delivery</h2>
      <p>
        Delivery is electronic and immediate. See the{" "}
        <Link href="/delivery">delivery policy</Link> for timing, what to do if your email does not
        arrive, and the technical requirements.
      </p>

      <h2>Right of withdrawal and refunds</h2>
      <p>
        Where you are a consumer in the EU or the UK you normally have 14 days to withdraw from a
        distance purchase. For digital content delivered immediately, that right ends once delivery
        has begun with your express consent. At checkout you are asked to consent to immediate
        delivery and to acknowledge that you lose the right of withdrawal at that point.
      </p>
      <p>
        We still refund orders that were never delivered, that do not work, or that were charged
        twice. See the <Link href="/refund">refund policy</Link> for the full detail and how to
        make a request.
      </p>

      <h2>Licence</h2>
      <p>
        Your purchase grants a personal-use licence. Reselling or redistributing a template is not
        permitted. See the <Link href="/license">licence page</Link> for the full terms.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You may not copy, scrape or republish the content of this site, attempt to gain
        unauthorised access to it, or use it in a way that disrupts service for other people.
      </p>

      <h2>Liability</h2>
      <p>
        The templates are provided as they are. We do our best to make them work everywhere, but we
        are not liable for indirect or consequential loss arising from their use. Our total
        liability for any claim is limited to the amount you paid for the product concerned.
        Nothing in these terms limits liability that cannot be limited by law, including liability
        for fraud.
      </p>

      <h2>Complaints and disputes</h2>
      <p>
        Please write to <a href={`mailto:${company.email}`}>{company.email}</a> first. We aim to
        resolve every complaint within 14 days. These terms are governed by the laws of the State of
        New Mexico, United States, without affecting any mandatory consumer protection rights you
        have in your country of residence.
      </p>

      <h2>Trademarks</h2>
      <p>
        Notion is a trademark of Notion Labs, Inc. {site.name} is an independent template studio and
        is not affiliated with, endorsed by, or sponsored by Notion Labs, Inc.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the shop evolves. The version published on this page at the
        time of your purchase is the one that applies to it.
      </p>
    </LegalPage>
  );
}
