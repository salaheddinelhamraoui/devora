import LegalPage from "@/components/common/LegalPage";
import { company } from "@/lib/site";

export default function License() {
  return (
    <LegalPage
      title="Licence"
      description="What you can and cannot do with a template after you buy it."
      path="/license"
      updated="4 August 2026"
    >
      <h2>Personal use licence</h2>
      <p>
        When you buy a template from {company.tradingName}, {company.legalName} grants you a
        non-exclusive, non-transferable licence to use that template for your own personal or
        internal business purposes, for as long as you like.
      </p>

      <h2>You may</h2>
      <p>
        Duplicate the template into your own Notion workspace, edit any page, database, view or
        property, change the colours and covers, add or delete sections, and use it for your own
        work or your own business, including client work whose deliverable is not the template
        itself.
      </p>

      <h2>You may not</h2>
      <p>
        Resell, sublicense, redistribute or give away the template or any modified version of it.
        Share your duplication link publicly or with people who have not purchased. Publish the
        template as your own product, in a bundle, or as part of a course or membership. Claim
        authorship of the design.
      </p>

      <h2>Team and multi-seat use</h2>
      <p>
        A single purchase covers one workspace. If your whole team needs to duplicate the template
        into separate workspaces, contact us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> for a multi-seat licence.
      </p>

      <h2>Updates</h2>
      <p>
        Improvements to a template you already own are sent to you free of charge. Updates are
        delivered as a new duplication link. Your existing copy is never modified or removed.
      </p>

      <h2>Enforcement</h2>
      <p>
        Breaching this licence terminates it immediately and without refund. We reserve the right to
        revoke access to duplication links that are shared publicly.
      </p>
    </LegalPage>
  );
}
