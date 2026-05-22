import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";

import en from "../lang/en.json";

const Wrapper = ({ children }) => {
  const messages = {
    en,
  };

  const { locale } = useRouter();

  const [lang, setLang] = useState("en");

  const supportedLanguages = ["en"];

  useEffect(() => {
    let userLanguage =
      localStorage.getItem("lang") ||
      navigator.language.slice(0, 2) ||
      navigator.userLanguage.slice(0, 2);

    userLanguage = supportedLanguages.includes(userLanguage)
      ? userLanguage
      : "en";

    setLang(userLanguage);
    localStorage.setItem("lang", userLanguage);
  }, []);

  return (
    <IntlProvider locale={lang || locale} messages={messages[lang || locale]}>
      <>{children}</>
    </IntlProvider>
  );
};

export default Wrapper;
