import Link from "next/link";
import { useIntl } from "react-intl";

import Seo from "../../components/common/Seo";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer2 from "../../components/footer/Footer2";
import NewsLetter from "../../components/footer/NewsLetter";
import Header2 from "../../components/header/Header2";
import FancyBanner from "../../components/home-page/home-2/FancyBanner";
import Faq from "../../components/home-page/home-2/Faq";
import Hero from "../../components/home-page/home-2/Hero";
import Partner2 from "../../components/home-page/home-2/Partner2";
import Pricing from "../../components/home-page/home-2/Pricing";
import BlockContact from "../../components/contact/BlockContact";
import ContactForm from "../../components/contact/ContactForm";

const WebHosting = () => {
  const intl = useIntl();

  return (
    <>
      <Seo pageTitle="Devora - WordPress Maintenance, Security & SEO Services" />

      <Header2 />

      <Hero />

      <div className="partner-section-four position-relative pt-60 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner2 />
          </div>
        </div>
      </div>

      <>
        <div className="pricing-section-four pt-170 lg-pt-100">
          <div className="wrapper pricing-table-area-four m-auto" id="pricing">
            <div className="row">
              <Pricing />
            </div>
          </div>

          <div className="container">
            <div className="text-center mt-100 lg-mt-50 " data-aos="fade-up">
              <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
                {intl.formatMessage({ id: "help.title" })}
                <a
                  href="/contact"
                  className="fw-normal text-decoration-underline"
                >
                  {intl.formatMessage({ id: "help.buttonText" })}
                </a>
              </div>
            </div>
          </div>
        </div>

        <FancyBanner />

        <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto" data-aos="fade-up">
                <div
                  className="title-style-seven text-center pb-120 lg-pb-50"
                  data-aos="fade-up"
                >
                  <h2 className="main-title fw-bold tx-dark">
                    {intl.formatMessage({ id: "faq.title1" })} <br />
                    <span className="position-relative d-inline-block">
                      {intl.formatMessage({ id: "faq.title2" })}{" "}
                      <img src="/images/shape/shape_99.svg" alt="" />
                    </span>
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
                <Faq />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section-one mt-200 lg-mt-30">
          <div className="container">
            <div className="row">
              <BlockContact />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-9 m-auto">
                <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                  {intl.formatMessage({ id: "contact.title2" })}
                </h2>
              </div>
              <div className="col-xl-11 m-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div
          className="fancy-short-banner-ten position-relative mt-225 lg-mt-100"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="bg-wrapper position-relative pt-50 pb-65 lg-pt-40 lg-pb-50">
              <div className="row">
                <div className="col-lg-11 m-auto">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5">
                      <h2 className="m0 text-white fw-bold md-pb-20">
                        {intl.formatMessage({ id: "moreInfo.title" })}
                      </h2>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                      <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                        <Link
                          href="/contact"
                          className="btn-line fw-500 tran3s position-relative me-sm-5"
                        >
                          {intl.formatMessage({
                            id: "moreInfo.buttonChatText",
                          })}
                        </Link>
                        <Link
                          href="/#pricing"
                          className="btn-solid fw-500 tran3s"
                        >
                          {intl.formatMessage({ id: "moreInfo.buttonText" })}
                        </Link>
                      </div>
                    </div>
                  </div>
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

                <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                  <h5 className="footer-title tx-dark fw-normal">
                    {intl.formatMessage({ id: "newsLetter.register" })}
                  </h5>
                  <h6 className="pt-15 pb-20 md-pt-10">
                    {intl.formatMessage({ id: "newsLetter.subTitle" })}
                  </h6>
                  <NewsLetter />
                  <div className="fs-14 mt-10">
                    {intl.formatMessage({ id: "newsLetter.description" })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyrightFooter2 />
        </div>
      </>
    </>
  );
};

export default WebHosting;
