/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { useIntl } from "react-intl";
import Seo from "../components/common/Seo";
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";

const TermsOfService = () => {
  const intl = useIntl();

  return (
    <>
      <Seo pageTitle="Terms of Service - Devora" />
      <Header2 />

      <div className="fancy-feature-fiftyOne position-relative pt-200 pb-160 lg-pt-120 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto" data-aos="fade-up">
              <div className="title-style-five text-center mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Legal
                </div>
                <h2 className="main-title fw-500 tx-dark">Terms of Service</h2>
                <p className="text-lg tx-dark mt-20 mb-35 lg-mb-30">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="text-wrapper">
                <h3 className="tx-dark mb-30">1. About us and acceptance of these terms</h3>
                <p className="tx-dark mb-30">
                  These Terms of Service ("Terms") form a binding agreement between
                  you ("you" or "the Customer") and Devora Systems, doing business
                  as Devora ("Devora," "we," "our," or "us"), a company organized
                  under the laws of the State of New Mexico, United States, with
                  its principal place of business at 1209 Mountain Road Pl NE,
                  STE R, Albuquerque, NM 87110, United States. By placing an order
                  on this website, creating an account, or using any of our
                  services you confirm that you have read, understood, and agreed
                  to be bound by these Terms together with our Privacy Policy and
                  Refund Policy, each of which is incorporated by reference.
                </p>

                <h3 className="tx-dark mb-30 mt-50">2. Description of services</h3>
                <p className="tx-dark mb-30">
                  Devora provides WordPress maintenance, security monitoring,
                  performance optimization, SEO, and related website management
                  services delivered remotely on a subscription or one-off basis.
                  Specific deliverables depend on the plan you purchase and may
                  include:
                </p>
                <ul className="style-none list-item">
                  <li>WordPress core, theme, and plugin updates</li>
                  <li>Security monitoring, malware scanning, and remediation</li>
                  <li>Website performance optimization</li>
                  <li>SEO optimization and reporting</li>
                  <li>Automated backups and restore on request</li>
                  <li>Uptime monitoring</li>
                  <li>Email-based technical support</li>
                </ul>
                <p className="tx-dark mb-30">
                  Devora is a B2B digital services provider. We do not sell,
                  license, resell, or redistribute audiovisual, broadcast, IPTV,
                  or streaming content of any kind, and we do not offer financial,
                  investment, money-transmission, virtual-currency, gambling,
                  pharmaceutical, firearms, tobacco, cannabis, adult, or other
                  regulated or restricted products. Our services are not designed
                  for or directed at consumers; if you place an order, you confirm
                  that you are acting on behalf of a business or other organisation.
                </p>

                <h3 className="tx-dark mb-30 mt-50">3. Eligibility, KYC, and account integrity</h3>
                <p className="tx-dark mb-30">
                  To open an account or place an order you must be at least 18
                  years of age, located in a jurisdiction that is not subject to
                  comprehensive U.S. sanctions (including OFAC-restricted
                  jurisdictions), and authorized to bind the business on whose
                  behalf you are ordering. You must provide accurate, current, and
                  complete information at sign-up, including a real legal name,
                  business name (where applicable), billing address that matches
                  the address on file with your card issuer, and a working email
                  address. We may verify this information, including by requesting
                  additional documentation, before activating or continuing to
                  provide services. You are responsible for keeping your account
                  credentials confidential and for all activity that takes place
                  through your account.
                </p>

                <h3 className="tx-dark mb-30 mt-50">4. Pricing, currency, taxes, and billing descriptor</h3>
                <p className="tx-dark mb-30">
                  Prices are displayed on the website in the currency selected at
                  checkout (U.S. Dollars (USD) by default; Euros (EUR) may also be
                  offered). Prices are exclusive of any applicable sales tax,
                  value-added tax, gross receipts tax, or other indirect taxes,
                  which will be added at the rate in force at the time of the
                  transaction and itemized on your invoice. The price applicable
                  to your order is the price displayed at the moment you complete
                  checkout. We may change our prices from time to time; changes
                  will not affect a paid subscription period that is already in
                  progress and will be notified at least 30 days before they take
                  effect for renewals. Charges from Devora will appear on your
                  card or bank statement under the billing descriptor
                  "DEVORA*SYSTEMS" or a similar identifier provided by our payment
                  processor.
                </p>

                <h3 className="tx-dark mb-30 mt-50">5. Payment terms, payment processor, and authorization</h3>
                <p className="tx-dark mb-30">
                  Payment is due in advance according to the billing cycle you
                  select at checkout (monthly, quarterly, semi-annual, or annual).
                  All card and bank payments are processed by our third-party
                  payment service provider, Stripe, Inc. and its affiliates
                  ("Stripe"). By submitting a payment you authorize us, through
                  Stripe, to (a) charge the payment method you have provided for
                  the amount displayed at checkout, (b) for subscriptions, charge
                  the same payment method for the then-current renewal amount at
                  the start of each renewal period until you cancel, and (c) where
                  required by card-network rules, perform tokenization, card
                  account updates, and Strong Customer Authentication.
                </p>
                <p className="tx-dark mb-30">
                  Devora does not store full card numbers, CVV codes, or bank
                  account numbers on its systems. Card data is transmitted
                  directly to Stripe via TLS and handled in accordance with the
                  Payment Card Industry Data Security Standard (PCI-DSS); Stripe
                  is certified as a PCI Service Provider Level 1. If a payment is
                  declined, reversed, charged back, or otherwise unsuccessful, we
                  may suspend the related services until the outstanding amount
                  has been settled. Failed renewal payments are automatically
                  retried for up to 14 days, after which the subscription will be
                  cancelled.
                </p>

                <h3 className="tx-dark mb-30 mt-50">6. Auto-renewal and cancellation</h3>
                <p className="tx-dark mb-30">
                  Subscriptions renew automatically at the end of each billing
                  cycle for the same term and at the then-current price unless you
                  cancel before the next renewal date. Renewal reminders are sent
                  by email at least 7 days before each renewal for terms of 6
                  months or longer. You may cancel a subscription at any time from
                  your account dashboard or by emailing
                  contact@devorasystems.com. Cancellation takes effect at the end of
                  the current paid period and prevents future renewals; it does
                  not by itself entitle you to a refund of fees already paid,
                  except as expressly set out in our Refund Policy or required by
                  applicable law.
                </p>

                <h3 className="tx-dark mb-30 mt-50">7. Delivery of services and consumer disclosures</h3>
                <p className="tx-dark mb-30">
                  Services are delivered electronically and typically begin within
                  one (1) business day of receipt of cleared funds and of the
                  access and information we need to start work. By placing an
                  order you expressly request that performance begin immediately
                  and acknowledge that, to the extent permitted by law, any
                  statutory right of withdrawal is lost or reduced in proportion
                  to the services already performed. Specific consumer rights
                  available in your jurisdiction (for example, the EU/UK 14-day
                  withdrawal right and U.S. state-law subscription cancellation
                  rights) are described in our Refund Policy and prevail to the
                  extent they are mandatory.
                </p>

                <h3 className="tx-dark mb-30 mt-50">8. Customer responsibilities</h3>
                <p className="tx-dark mb-30">You are responsible for:</p>
                <ul className="style-none list-item">
                  <li>Providing accurate website, hosting, and DNS access</li>
                  <li>Holding all necessary rights to the content on your website</li>
                  <li>Notifying us promptly of any changes to your hosting environment</li>
                  <li>Maintaining current contact and billing information</li>
                  <li>Reviewing your website after any updates we perform</li>
                  <li>Using the services only for lawful purposes and in compliance with these Terms</li>
                </ul>

                <h3 className="tx-dark mb-30 mt-50">9. Acceptable use and prohibited activities</h3>
                <p className="tx-dark mb-30">
                  You may not use Devora's services in connection with any of the
                  following: infringement of intellectual property, publicity, or
                  privacy rights; distribution of malware, phishing kits, spam,
                  bulk unsolicited communications, or other abusive content; sale
                  or facilitation of counterfeit, stolen, or illegal goods or
                  services; unlicensed financial services, money transmission,
                  cryptocurrency exchange, "get-rich-quick" schemes, or
                  multi-level marketing; gambling or sports-betting; adult content
                  involving minors or any other CSAM; sale of regulated
                  pharmaceuticals, firearms, ammunition, tobacco, vape, or
                  controlled substances where prohibited; any business or
                  transaction that is sanctioned by the U.S. Office of Foreign
                  Assets Control (OFAC), the United Nations, the European Union,
                  or HM Treasury, or that involves a sanctioned person or
                  jurisdiction; or any activity that violates applicable law or
                  the published rules of our payment processor or the major card
                  networks (Visa, Mastercard, American Express, Discover). We may
                  suspend or terminate the services immediately and without refund
                  if we have a reasonable basis to believe you are in breach of
                  this clause.
                </p>

                <h3 className="tx-dark mb-30 mt-50">10. Anti-money-laundering, fraud, and sanctions compliance</h3>
                <p className="tx-dark mb-30">
                  We operate written policies and controls to detect and prevent
                  money laundering, terrorist financing, sanctions evasion, and
                  payment fraud. We may, at our sole discretion and without
                  liability, decline an order, request additional verification
                  information, freeze provision of services, or report a
                  transaction to the relevant authorities if we reasonably believe
                  that a payment is fraudulent, that funds have an illicit origin,
                  or that the transaction would breach applicable sanctions or
                  anti-money-laundering laws.
                </p>

                <h3 className="tx-dark mb-30 mt-50">11. Service level commitment</h3>
                <p className="tx-dark mb-30">
                  We target 99.9% availability for our own monitoring platform and
                  aim to acknowledge critical support tickets within four (4)
                  business hours (Monday-Friday, 9:00-18:00 Mountain Time,
                  excluding U.S. federal holidays). We do not guarantee that your
                  website itself will be free of interruptions, since your site
                  depends on third-party hosting, networks, and software outside
                  our control.
                </p>

                <h3 className="tx-dark mb-30 mt-50">12. Intellectual property and DMCA</h3>
                <p className="tx-dark mb-30">
                  All proprietary content of the Devora website, including text,
                  graphics, logos, and software, is owned by or licensed to
                  Devora Systems and is protected by applicable U.S. and
                  international intellectual-property laws. We respect the
                  intellectual-property rights of others. Notices of claimed
                  copyright infringement under 17 U.S.C. § 512 (DMCA) may be sent
                  to our Designated Agent at contact@devorasystems.com with the
                  subject line "DMCA Notice" and must include the information
                  required by section 512(c)(3).
                </p>

                <h3 className="tx-dark mb-30 mt-50">13. Disclaimer of warranties and limitation of liability</h3>
                <p className="tx-dark mb-30">
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                  BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, DEVORA DISCLAIMS
                  ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  AND NON-INFRINGEMENT. Our total aggregate liability arising out
                  of or in connection with these Terms is limited to the greater
                  of (a) the fees actually paid by you to us in the twelve (12)
                  months immediately preceding the event giving rise to the claim
                  or (b) one hundred U.S. dollars (USD 100). We will not be liable
                  for indirect, incidental, special, exemplary, or consequential
                  losses, including loss of profits, revenue, data, or goodwill.
                  Nothing in these Terms excludes or limits any liability that
                  cannot be excluded or limited under applicable law, including
                  liability for fraud, willful misconduct, or gross negligence.
                </p>

                <h3 className="tx-dark mb-30 mt-50">14. Termination</h3>
                <p className="tx-dark mb-30">
                  Either party may terminate the agreement on thirty (30) days'
                  written notice. We may suspend or terminate the services
                  immediately if you fail to pay, breach these Terms, or engage in
                  any activity prohibited under clauses 9 or 10. On termination,
                  upon written request and at our discretion, we will provide a
                  copy of the most recent backup we hold; thereafter we may delete
                  your data in accordance with our published retention schedule.
                </p>

                <h3 className="tx-dark mb-30 mt-50">15. Chargebacks and dispute resolution</h3>
                <p className="tx-dark mb-30">
                  Before initiating a chargeback with your card issuer or bank,
                  you agree to contact us in good faith at
                  contact@devorasystems.com so we can attempt to resolve the matter
                  directly. Initiating a chargeback for a charge that is valid
                  under these Terms or our Refund Policy may, at our discretion,
                  result in suspension of services and recovery of associated
                  chargeback fees. We respond to all legitimate chargeback notices
                  through our payment processor in line with card-network rules.
                </p>

                <h3 className="tx-dark mb-30 mt-50">16. Changes to these Terms</h3>
                <p className="tx-dark mb-30">
                  We may update these Terms from time to time. Material changes
                  will be notified to active customers by email at least 14 days
                  before they take effect. Continued use of the services after
                  that date constitutes acceptance of the revised Terms.
                </p>

                <h3 className="tx-dark mb-30 mt-50">17. Governing law and dispute resolution</h3>
                <p className="tx-dark mb-30">
                  These Terms and any dispute, claim, or controversy arising out
                  of or relating to them, the services, or your relationship with
                  Devora are governed by the laws of the State of New Mexico,
                  United States, without regard to its conflict-of-laws rules.
                  Subject to any non-waivable consumer rights you may have, the
                  state and federal courts located in Bernalillo County, New
                  Mexico shall have exclusive jurisdiction over any dispute, and
                  you and Devora each consent to personal jurisdiction and venue
                  in those courts. Each party waives the right to a trial by jury
                  to the maximum extent permitted by law. Any claim must be
                  brought within one (1) year after the cause of action arose,
                  except where a longer limitations period is required by law.
                </p>

                <h3 className="tx-dark mb-30 mt-50">18. Contact information</h3>
                <p className="tx-dark mb-30">
                  Questions about these Terms, billing, or any order can be sent
                  to:
                </p>
                <p className="tx-dark mb-30">
                  <strong>Devora Systems</strong>
                  <br />
                  1209 Mountain Road Pl NE, STE R
                  <br />
                  Albuquerque, NM 87110
                  <br />
                  United States
                  <br />
                  Email: contact@devorasystems.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-style-seven p-30 theme-basic-footer">
        <div className="bg-wrapper position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-2 footer-intro mb-40">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/images/logo/logo_01.png"
                      alt="brand"
                      width="120"
                    />
                  </a>
                </div>
              </div>
              <Footer2 />
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default TermsOfService;
