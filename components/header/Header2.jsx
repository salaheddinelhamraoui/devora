import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import { useIntl } from "react-intl";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const intl = useIntl();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleLanguageChange = (e) => {
    switch (e.target.value) {
      case "🇺🇸 English":
        setSelectedLanguage("🇺🇸 English");
        localStorage.setItem("lang", "en");
        window.location.reload();
        break;
      default:
        setSelectedLanguage("🇺🇸 English");
        localStorage.setItem("lang", "en");
        window.location.reload();
        break;
    }
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (lang) {
      switch (lang) {
        case "en":
          setSelectedLanguage("🇺🇸 English");
          break;
        default:
          setSelectedLanguage("🇺🇸 English");
          break;
      }
    }
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <img src="/images/logo/logo_01.png" alt="" width={120} />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/#pricing"
              className="start-btn-one fs-18 fw-500 tran3s position-relative d-none d-lg-block"
              style={{
                marginLeft: "10px",
              }}
            >
              {intl.formatMessage({ id: "hero.button" })}
            </Link>
          </div>{" "}
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
