import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type ContactsText = {
  title: string;
};

export default function useToggleContactsText() {
  const [contactsText, setContactsText] = useState<ContactsText>(
    {} as ContactsText
  );

  const { language } = useContext(LanguageContext);

  const toggleContactsText = useCallback(() => {
    if (language === "pt-br")
      return setContactsText({
        title: "Contatos",
      });

    if (language === "us-en")
      return setContactsText({
        title: "Contacts",
      });
  }, [language]);

  useEffect(() => {
    toggleContactsText();
  }, [toggleContactsText]);

  return {
    contactsText,
  };
}
