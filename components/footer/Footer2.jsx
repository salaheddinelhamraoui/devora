import { useIntl } from "react-intl";

const Footer2 = () => {
  const intl = useIntl();

  const columns = [
    {
      title: "Links",
      links: [
        { label: intl.formatMessage({ id: "menu.home" }), url: "/" },
        { label: intl.formatMessage({ id: "menu.aboutUs" }), url: "/about-us" },
        {
          label: intl.formatMessage({ id: "menu.contactUs" }),
          url: "/contact",
        },
      ],
    },
    {
      title: intl.formatMessage({ id: "menu.steun" }),
      links: [
        {
          label: intl.formatMessage({ id: "menu.contactUs" }),
          url: "/contact",
        },
        {
          label: intl.formatMessage({ id: "menu.privacyPolicy" }),
          url: "/privacy-policy",
        },
        {
          label: intl.formatMessage({ id: "menu.refundPolicy" }),
          url: "/refund-policy",
        },
        {
          label: "Terms of Service",
          url: "/terms-of-service",
        },
      ],
    },
  ];

  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
