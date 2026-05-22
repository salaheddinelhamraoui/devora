import { useIntl } from "react-intl";

const FancyBanner = () => {
  const intl = useIntl();

  const bannerData = [
    {
      title: intl.formatMessage({ id: "details.title" }),
      mainTitle: intl.formatMessage({ id: "details.subtitle" }),
      description: intl.formatMessage({ id: "details.description" }),
      illustration: "/images/assets/1.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
    },
    {
      title: intl.formatMessage({ id: "details2.title" }),
      mainTitle: intl.formatMessage({ id: "details2.subtitle" }),
      description: intl.formatMessage({ id: "details2.description" }),
      buttonLabel: "",
      illustration: "/images/assets/2.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder">
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                    style={{
                      marginLeft: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
