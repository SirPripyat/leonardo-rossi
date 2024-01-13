import { IconType } from "react-icons";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";

type ContactsContent = {
  name: string;
  icon: IconType;
  link: string;
};

export const contactsContent: ContactsContent[] = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/rafael-ramos-oliveira/",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/SirPripyat",
  },
  {
    name: "Gmail",
    icon: BiLogoGmail,
    link: "mailto:08.leo.rossi@gmail.com",
  },
];
