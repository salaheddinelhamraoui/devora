import LegalPage from "@/components/common/LegalPage";
import { company } from "@/lib/site";

export default function Delivery() {
  return (
    <LegalPage
      title="Delivery policy"
      description="How and when your Notion template is delivered after payment."
      path="/delivery"
      updated="4 August 2026"
    >
      <h2>Digital delivery only</h2>
      <p>
        Every product sold by {company.legalName} is a digital Notion template. Nothing physical is
        produced, packaged or shipped, so no shipping address, shipping cost or carrier is involved.
      </p>

      <h2>When you receive it</h2>
      <p>
        Delivery is automatic and immediate. As soon as your payment is confirmed, an email is sent
        to the address you entered at checkout containing a PDF with your private Notion link. In
        almost every case this arrives within a minute. Allow up to one hour during periods of
        heavy email traffic.
      </p>

      <h2>How to use your link</h2>
      <p>
        Open the link from the PDF, then press <strong>Duplicate</strong> in the top-right corner of
        the Notion page. The full template is copied into your own Notion workspace, where you can
        edit it freely. A free Notion account is all you need.
      </p>

      <h2>If your email does not arrive</h2>
      <p>
        First check your spam, promotions and updates folders, and search your inbox for the sender
        address <a href={`mailto:${company.email}`}>{company.email}</a>. If it is still missing,
        write to us with the email address and the name used at checkout and we will resend your
        link straight away. There is no time limit on this: your purchase does not expire.
      </p>

      <h2>Updates</h2>
      <p>
        When we improve a template you have already bought, we email you the updated link at no
        extra cost. Your existing copy is never changed or removed.
      </p>

      <h2>Technical requirements</h2>
      <p>
        A free Notion account and any modern browser, or the Notion desktop, tablet or mobile app.
        No plugin, extension or additional purchase is required.
      </p>

      <h2>Questions</h2>
      <p>
        Anything about delivery goes to <a href={`mailto:${company.email}`}>{company.email}</a>. We
        reply within one working day.
      </p>
    </LegalPage>
  );
}
