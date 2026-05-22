import Link from "next/link";
import { useIntl } from "react-intl";
import Seo from "../components/common/Seo";
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";

const Services = () => {
  const intl = useIntl();

  return (
    <>
      <Seo pageTitle="Our Services - WordPress Maintenance, Security & SEO" />
      <Header2 />

      <div className="fancy-feature-fiftyOne position-relative pt-200 pb-160 lg-pt-120 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 m-auto" data-aos="fade-up">
              <div className="title-style-five text-center mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Our Services
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Comprehensive WordPress Maintenance, Security & SEO Services
                </h2>
              </div>
            </div>
          </div>

          <div className="row gx-xxl-5">
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="card-style-sixteen text-center mt-40">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img src="/images/icon/icon_68.svg" alt="" />
                </div>
                <h4 className="fw-bold tx-dark mt-35 mb-25">
                  WordPress Updates
                </h4>
                <p className="fs-16">
                  Keep your WordPress core, themes, and plugins updated with the
                  latest security patches and features. We handle all updates
                  safely with proper testing.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-style-sixteen text-center mt-40">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img src="/images/icon/icon_69.svg" alt="" />
                </div>
                <h4 className="fw-bold tx-dark mt-35 mb-25">
                  Security Monitoring
                </h4>
                <p className="fs-16">
                  24/7 security monitoring and threat detection. We scan for
                  malware, suspicious activity, and security vulnerabilities to
                  keep your site protected.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-style-sixteen text-center mt-40">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img src="/images/icon/icon_70.svg" alt="" />
                </div>
                <h4 className="fw-bold tx-dark mt-35 mb-25">
                  Performance Optimization
                </h4>
                <p className="fs-16">
                  Speed up your website with database optimization, image
                  compression, caching setup, and code optimization for better
                  user experience and SEO.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="card-style-sixteen text-center mt-40">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img src="/images/icon/icon_71.svg" alt="" />
                </div>
                <h4 className="fw-bold tx-dark mt-35 mb-25">
                  Automated Backups
                </h4>
                <p className="fs-16">
                  Regular automated backups stored securely off-site. Quick
                  restore capabilities ensure your website can be recovered
                  quickly if needed.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-style-sixteen text-center mt-40">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img src="/images/icon/icon_72.svg" alt="" />
                </div>
                <h4 className="fw-bold tx-dark mt-35 mb-25">
                  Uptime Monitoring
                </h4>
                <p className="fs-16">
                  Continuous monitoring to ensure your website is always online.
                  Immediate alerts and quick response to any downtime issues.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-style-sixteen text-center mt-40">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img src="/images/icon/icon_73.svg" alt="" />
                </div>
                <h4 className="fw-bold tx-dark mt-35 mb-25">Expert Support</h4>
                <p className="fs-16">
                  Access to WordPress experts for technical support,
                  troubleshooting, and guidance. Priority support included with
                  all maintenance plans.
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
                  <Link href="/">
                    <img
                      src="/images/logo/logo_01.png"
                      alt="brand"
                      width="120"
                    />
                  </Link>
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

export default Services;
