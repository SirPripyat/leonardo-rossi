import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type BannerText = {
  apresentation: string;
  name: string;
  profession: string;
  primaryButton: string;
  secondaryButton: string;
};

export default function useToggleBannerText() {
  const [bannerText, setBannerText] = useState<BannerText>({} as BannerText);

  const { language } = useContext(LanguageContext);

  const toggleBannerText = useCallback(() => {
    if (language === "pt-br") {
      return setBannerText({
        apresentation: "Olá, eu sou o",
        name: "<Leonardo Rossi/>",
        profession: "// Desenvolvedor FullStack",
        primaryButton: "Ver currículo",
        secondaryButton: "Contatos",
      });
    }

    if (language === "us-en") {
      return setBannerText({
        apresentation: "Hello, I'm",
        name: "<Leonardo Rossi/>",
        profession: "// FullStack Developer",
        primaryButton: "See resume",
        secondaryButton: "Contacts",
      });
    }
  }, [language]);

  useEffect(() => {
    toggleBannerText();
  }, [toggleBannerText]);

  return { bannerText };
}
