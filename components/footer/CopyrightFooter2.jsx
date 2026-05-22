import Link from "next/link";
import { useIntl } from "react-intl";

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
  },
  {
    icon: "fab fa-twitter",
    href: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const Footer = () => {
  const intl = useIntl();

  const links = [
    {
      title: intl.formatMessage({ id: "menu.privacyPolicy" }),
      href: "/privacy-policy",
    },
    {
      title: intl.formatMessage({ id: "menu.contactUs" }),
      href: "/contact",
    },
  ];
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
              {links.map((link, index) => (
                <LinkItem key={index} title={link.title} href={link.href} />
              ))}
            </ul>
          </div>

          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit" }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Genova Tech LTD
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
