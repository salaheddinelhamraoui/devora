import { useIntl } from "react-intl";

import Seo from "../components/common/Seo";
import DefaultFooter from "../components/footer/DefaultFooter";
import Testimonial from "../components/home-page/home-3/Testimonial";
import Header2 from "../components/header/Header2";

const AboutUsV1 = () => {
  const intl = useIntl();

  return (
    <>
      <Seo pageTitle={intl.formatMessage({ id: "menu.aboutUs" })} />

      <Header2 />

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  {intl.formatMessage({ id: "aboutUs.subTitle" })}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {intl.formatMessage({ id: "aboutUs.title" })}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">{intl.formatMessage({ id: "aboutUs.description1" })}</h6>

                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description2" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description3" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description4" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description5" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description6" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description7" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description8" })}

                </p>
                <p className="text-lg tx-dark">
                  {intl.formatMessage({ id: "aboutUs.description9" })}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;
