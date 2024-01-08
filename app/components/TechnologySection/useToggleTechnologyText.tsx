import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type TechnologyText = {
  title: string;
};

export default function useToggleTechnologyText() {
  const [technologyText, setTechnologyText] = useState<TechnologyText>(
    {} as TechnologyText
  );

  const { language } = useContext(LanguageContext);

  const toggleTechnologyText = useCallback(() => {
    if (language === "pt-br")
      return setTechnologyText({
        title: "Tecnologias",
      });

    if (language === "us-en")
      return setTechnologyText({
        title: "Technologies",
      });
  }, [language]);

  useEffect(() => {
    toggleTechnologyText();
  }, [toggleTechnologyText]);

  return {
    technologyText,
  };
}
