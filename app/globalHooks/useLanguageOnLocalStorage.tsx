import { useCallback, useEffect, useState } from "react";
import { LanguageType } from "../types/language";

export default function useLanguageOnLocalStorage() {
  const setLanguageOnClick = (language: LanguageType): void => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.error(error);
    }
  };

  const [language, setLanguage] = useState<LanguageType>("pt-br");

  const getLanguage = useCallback(() => {
    if (typeof window === "undefined") return;

    const getLanguage = localStorage.getItem("language") as LanguageType;

    return setLanguage(getLanguage);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    getLanguage();

    return () => controller.abort();
  }, [getLanguage]);

  return {
    setLanguageOnClick,
    language,
  };
}
