"use client";

import "./Contacts.scss";
import { ContactCards } from "../ContactCards/ContactCards";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import useToggleContactsText from "./useToggleContactsText";

export function Contacts() {
  const {
    contactsText: { title },
  } = useToggleContactsText();

  return (
    <section id="contacts">
      <h1 className="contacts__title">{title}</h1>
      <div className="contacts__card-area">
        <ContactCards
          contactName={"Linkedin"}
          contactIcon={RxLinkedinLogo}
          contactLink={"https://www.linkedin.com/in/leonardo-rossi-43715b209/"}
        />
        <ContactCards
          contactName={"GitHub"}
          contactIcon={RxGithubLogo}
          contactLink={"https://github.com/SirPripyat"}
        />
        <ContactCards
          contactName={"Gmail"}
          contactIcon={BiLogoGmail}
          contactLink={"mailto:08.leo.rossi@gmail.com"}
        />
      </div>
    </section>
  );
}
