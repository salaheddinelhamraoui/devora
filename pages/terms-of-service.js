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
      <Seo pageTitle="Terms of Service - Genova Tech" />
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
                <h3 className="tx-dark mb-30">1. Acceptance of Terms</h3>
                <p className="tx-dark mb-30">
                  By accessing and using the services provided by Genova Tech
                  ("we," "our," or "us"), you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree
                  to abide by the above, please do not use this service.
                </p>

                <h3 className="tx-dark mb-30 mt-50">2. Service Description</h3>
                <p className="tx-dark mb-30">
                  Genova Tech provides WordPress maintenance, security
                  monitoring, performance optimization, SEO services, and
                  related website management services. Our services include but
                  are not limited to:
                </p>
                <ul className="style-none list-item">
                  <li>WordPress core, theme, and plugin updates</li>
                  <li>Security monitoring and malware scanning</li>
                  <li>Website performance optimization</li>
                  <li>SEO optimization and monitoring</li>
                  <li>Automated backup services</li>
                  <li>Uptime monitoring</li>
                  <li>Technical support</li>
                </ul>

                <h3 className="tx-dark mb-30 mt-50">3. Payment Terms</h3>
                <p className="tx-dark mb-30">
                  Payment for services is due in advance according to the
                  billing cycle you have selected (monthly, quarterly,
                  semi-annually, or annually). All prices are in Euros (EUR) and
                  are subject to change with 30 days notice.
                </p>

                <h3 className="tx-dark mb-30 mt-50">
                  4. Service Level Agreement
                </h3>
                <p className="tx-dark mb-30">
                  We strive to maintain a 99.9% uptime for all monitoring
                  services. While we cannot guarantee your website will never
                  experience issues, we commit to responding to critical issues
                  within 4 hours during business hours (Monday-Friday, 9 AM - 6
                  PM GMT).
                </p>

                <h3 className="tx-dark mb-30 mt-50">
                  5. Client Responsibilities
                </h3>
                <p className="tx-dark mb-30">You are responsible for:</p>
                <ul className="style-none list-item">
                  <li>Providing accurate website access credentials</li>
                  <li>
                    Notifying us of any changes to your hosting environment
                  </li>
                  <li>Maintaining current contact information</li>
                  <li>Testing your website after any updates we perform</li>
                </ul>

                <h3 className="tx-dark mb-30 mt-50">
                  6. Limitation of Liability
                </h3>
                <p className="tx-dark mb-30">
                  Our liability is limited to the amount paid for services in
                  the preceding 12 months. We are not responsible for any data
                  loss, business interruption, or consequential damages that may
                  result from website issues or service interruptions.
                </p>

                <h3 className="tx-dark mb-30 mt-50">7. Termination</h3>
                <p className="tx-dark mb-30">
                  Either party may terminate this agreement with 30 days written
                  notice. Upon termination, you will receive access to any
                  backups we have created and all monitoring services will
                  cease.
                </p>

                <h3 className="tx-dark mb-30 mt-50">8. Contact Information</h3>
                <p className="tx-dark mb-30">
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <p className="tx-dark mb-30">
                  <strong>Genova Tech</strong>
                  <br />
                  71-75, Shelton Street, Covent Garden
                  <br />
                  London, WC2H 9JQ
                  <br />
                  United Kingdom
                  <br />
                  Email: support@genova-tech.uk
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
