import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type AnchorText = {
  label: string;
  link: string;
}[];

export default function useToggleMenuMobileText() {
  const { language } = useContext(LanguageContext);

  const [menuMobileText, setMenuMobileText] = useState<AnchorText>([]);

  const toggleMenuMobileText = useCallback(() => {
    if (language === "pt-br") {
      return setMenuMobileText([
        { label: "Sobre Mim", link: "#aboutMe" },
        { label: "Experiências", link: "#experiences" },
        { label: "Tecnologias", link: "#technology" },
        { label: "Projetos", link: "#projects" },
        { label: "Contatos", link: "#contacts" },
      ]);
    }

    if (language === "us-en") {
      return setMenuMobileText([
        { label: "About Me", link: "#aboutMe" },
        { label: "Experiences", link: "#experiences" },
        { label: "Technologies", link: "#technology" },
        { label: "Projects", link: "#projects" },
        { label: "Contacts", link: "#contacts" },
      ]);
    }
  }, [language]);

  useEffect(() => {
    toggleMenuMobileText();
  }, [toggleMenuMobileText]);

  return {
    menuMobileText,
  };
}
