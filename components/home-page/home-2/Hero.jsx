import Link from "next/link";
import { useIntl } from "react-intl";

const Hero = () => {
  const intl = useIntl();

  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                {intl.formatMessage({ id: "hero.title" })}
                <span className="position-relative ms-3 d-inline-block">
                  no. 1 <img src="/images/shape/shape_95.svg" alt="shape" />
                </span>
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                {intl.formatMessage({ id: "hero.subtitle" })}
              </p>
              <Link href="#pricing" className="btn-fourteen fw-500 tran3s">
                {intl.formatMessage({ id: "hero.button" })}
              </Link>
            </div>
          </div>
          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/tvStreaming.png"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
