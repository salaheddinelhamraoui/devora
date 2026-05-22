import { useState } from "react";
import { useIntl } from "react-intl";

const Pricing = () => {
  const intl = useIntl();
  const [selectedPlan, setSelectedPlan] = useState(2);

  const plans = [
    {
      id: 1,
      name: intl.formatMessage({ id: "pricing.turbo.3month.title" }),
      details: intl.formatMessage({ id: "pricing.turbo.3month.subTitle" }),
      price: intl.formatMessage({ id: "pricing.turbo.3month.price" }),
      billing: intl.formatMessage({ id: "pricing.turbo.3month.priceTitle" }),
      limit: "",
      btnClass: "btn-sixteen fw-500 tran3s w-100",
      features: [
        intl.formatMessage({ id: "pricing.features.1" }),
        intl.formatMessage({ id: "pricing.features.2" }),
        intl.formatMessage({ id: "pricing.features.3" }),
        intl.formatMessage({ id: "pricing.features.4" }),
        intl.formatMessage({ id: "pricing.features.5" }),
        intl.formatMessage({ id: "pricing.features.6" }),
        intl.formatMessage({ id: "pricing.features.7" }),
      ],
      bgColor: "#E2F2FD",
      animDelay: "100",
      link: intl.formatMessage({ id: "pricing.turbo.3month.link" }),
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "pricing.turbo.6month.title" }),
      details: intl.formatMessage({ id: "pricing.turbo.6month.subTitle" }),
      price: intl.formatMessage({ id: "pricing.turbo.6month.price" }),
      billing: intl.formatMessage({ id: "pricing.turbo.6month.priceTitle" }),
      limit: "",
      btnClass: "btn-sixteen fw-500 tran3s w-100",
      features: [
        intl.formatMessage({ id: "pricing.features.1" }),
        intl.formatMessage({ id: "pricing.features2.1" }),
        intl.formatMessage({ id: "pricing.features.3" }),
        intl.formatMessage({ id: "pricing.features.4" }),
        intl.formatMessage({ id: "pricing.features.5" }),
        intl.formatMessage({ id: "pricing.features.6" }),
        intl.formatMessage({ id: "pricing.features.7" }),
      ],
      bgColor: "#e1ffe2",
      animDelay: "100",
      link: intl.formatMessage({ id: "pricing.turbo.6month.link" }),
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "pricing.turbo.12month.title" }),
      details: intl.formatMessage({ id: "pricing.turbo.12month.subTitle" }),
      price: intl.formatMessage({ id: "pricing.turbo.12month.price" }),
      billing: intl.formatMessage({ id: "pricing.turbo.12month.priceTitle" }),
      limit: "",
      btnClass: "btn-sixteen fw-500 tran3s w-100",
      features: [
        intl.formatMessage({ id: "pricing.features.1" }),
        intl.formatMessage({ id: "pricing.features2.2" }),
        intl.formatMessage({ id: "pricing.features.3" }),
        intl.formatMessage({ id: "pricing.features.4" }),
        intl.formatMessage({ id: "pricing.features.5" }),
        intl.formatMessage({ id: "pricing.features.6" }),
        intl.formatMessage({ id: "pricing.features.7" }),
      ],
      bgColor: "rgb(255 231 238)",
      animDelay: "100",
      link: intl.formatMessage({ id: "pricing.turbo.12month.link" }),
    },
  ];

  return (
    <>
      <div
        className="title-style-seven text-center"
        data-aos="fade-up"
        style={{
          marginTop: "50px",
        }}
      >
        <h2 className="main-title fw-bold tx-dark">
          <span
            className="position-relative d-inline-block"
            style={{
              marginRight: "20px",
            }}
          >
            {intl.formatMessage({ id: "pricing.turbo.title1" })}
            <img src="/images/shape/shape_96.svg" alt="shape" />
          </span>
          {intl.formatMessage({ id: "pricing.turbo.title2" })}
        </h2>
        <div className="pack-details  fs-14">
          {intl.formatMessage({ id: "pricing.turbo.subTitle" })}
        </div>
      </div>
      {plans.map((plan) => (
        <div
          className="col-xl-4 col-sm-6"
          key={plan.id}
          data-aos="fade-up"
          data-aos-delay={plan.animDelay}
        >
          <div
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center d-md-flex"
              style={{ background: plan.bgColor }}
            >
              <div className="price fw-500">{plan.price}</div>
              <div>
                <span>{plan.billing}</span>
                <em className="d-block">{plan.limit}</em>
              </div>
            </div>
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.link} className={plan.btnClass}>
              {intl.formatMessage({ id: "hero.button" })}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
