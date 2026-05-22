import { useIntl } from "react-intl";

const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Geringster Preis.",
    content:
      "Genova TV bietet die günstigsten Preise für hochwertige IP-TV-Dienste in Deutschland an.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Schnellste Server",
    content:
      "Wir bieten den schnellsten Service auf dem Markt an, um sicherzustellen, dass Sie Ihre Inhalte mit Genova TV reibungslos und ohne Verzögerungen streamen können.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Garantierter Service",
    content:
      "Wir bieten einen garantierten Service, sodass Sie sich auf Genova TV verlassen können, um Ihnen eine zuverlässige und qualitativ hochwertige IP-TV-Erfahrung zu bieten.",
  },
];

const WhyChoose = () => {
  const intl = useIntl();

  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
