import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type FooterText = {
  title: string;
  link: string;
}[];

export default function useToggleFooterText() {
  const [footerText, setFooterText] = useState<FooterText>({} as FooterText);

  const { language } = useContext(LanguageContext);

  const toggleFooterText = useCallback(() => {
    if (language === "pt-br")
      return setFooterText([
        {
          title: "Sobre Mim",
          link: "#aboutMe",
        },
        {
          title: "Tecnologias",
          link: "#technology",
        },
        {
          title: "Principais Projetos",
          link: "#mainProjects",
        },
        {
          title: "Contatos",
          link: "#contacts",
        },
      ]);

    if (language === "us-en")
      return setFooterText([
        {
          title: "About Me",
          link: "#aboutMe",
        },
        {
          title: "Technologies",
          link: "#technology",
        },
        {
          title: "Main Projects",
          link: "#mainProjects",
        },
        {
          title: "Contacts",
          link: "#contacts",
        },
      ]);
  }, [language]);

  useEffect(() => {
    toggleFooterText();
  }, [toggleFooterText]);

  return {
    footerText,
  };
}
