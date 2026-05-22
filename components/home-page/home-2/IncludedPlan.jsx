import { useIntl } from "react-intl";

const IncludedPlan = () => {
  const intl = useIntl();

  const cards = [
    {
      id: 1,
      icon: "/images/icon/icon_63.svg",
      title: intl.formatMessage({ id: "features1.title" }),
      description: intl.formatMessage({ id: "features1.description" }),
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/images/icon/icon_64.svg",
      title: intl.formatMessage({ id: "features2.title" }),
      description: intl.formatMessage({ id: "features2.description" }),
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/images/icon/icon_65.svg",
      title: intl.formatMessage({ id: "features3.title" }),
      description: intl.formatMessage({ id: "features3.description" }),
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/images/icon/icon_66.svg",
      title: intl.formatMessage({ id: "features4.title" }),
      description: intl.formatMessage({ id: "features4.description" }),
      delayAnim: "100",
    },
    {
      id: 5,
      icon: "/images/icon/icon_67.svg",
      title: intl.formatMessage({ id: "features5.title" }),
      description: intl.formatMessage({ id: "features5.description" }),
      delayAnim: "200",
    },
    {
      id: 6,
      icon: "/images/icon/icon_68.svg",
      title: intl.formatMessage({ id: "features6.title" }),
      description: intl.formatMessage({ id: "features6.description" }),
      delayAnim: "300",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img src={card.icon} alt="illustration" className="lazy-img" />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
