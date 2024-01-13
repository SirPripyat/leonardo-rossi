import { useCallback, useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/languageContext/LanguageContext";
import { LanguageType } from "../types/language";

type LanguageText<T> = {
  [key: string]: T;
};

export default function useToggleLanguageText<T>(texts: LanguageText<T>) {
  const { language } = useContext(LanguageContext);

  const [text, setText] = useState<T>(texts["pt-br"]);

  const toggleLanguage = useCallback(() => {
    if (language === "pt-br") return setText(texts["pt-br"]);
    if (language === "us-en") return setText(texts["us-en"]);
  }, [language, texts]);

  useEffect(() => {
    toggleLanguage();
  }, [toggleLanguage]);

  return {
    text,
  };
}
