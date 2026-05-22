import Link from "next/link";
import { useIntl } from "react-intl";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  const intl = useIntl();

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/" role="button">
              {intl.formatMessage({ id: "menu.home" })}
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/about-us" role="button">
              {intl.formatMessage({ id: "menu.aboutUs" })}
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/services" role="button">
              Services
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Support
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/refund-policy">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              {intl.formatMessage({ id: "menu.contactUs" })}
            </Link>
          </li>
        </ul>

        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              {intl.formatMessage({ id: "menu.contactUs" })}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
