"use client";

import { LanguageType } from "@/app/types/language";
import { createContext, useState } from "react";

type LanguageContextType = {
  language: LanguageType;
  setLanguageOnClick: (language: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>("pt-br");

  const setLanguageOnClick = (language: LanguageType): void =>
    setLanguage(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguageOnClick }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
