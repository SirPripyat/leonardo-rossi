"use client";

import Image from "next/image";
import leonardoRossiLogoGreen from "../../assets/logo-green.svg";
import "./Footer.scss";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { Anchor } from "../Anchor/Anchor";
import useToggleFooterText from "./useToogleFooterText";

const footerSocialMediaContent = [
  {
    link: "https://www.linkedin.com/in/leonardo-rossi-43715b209/",
    icon: <RxLinkedinLogo />,
  },
  {
    link: "https://github.com/SirPripyat",
    icon: <RxGithubLogo />,
  },
  {
    link: "mailto:08.leo.rossi@gmail.com",
    icon: <BiLogoGmail />,
  },
];

export default function Footer() {
  const { footerText } = useToggleFooterText();

  return (
    <footer className="footer">
      <div className="footer__logo-social-media">
        <Image src={leonardoRossiLogoGreen} alt="Leonardo Rossi Logo" />
        <div className="social-media">
          {footerSocialMediaContent.map(({ link, icon }, index) => (
            <Link href={link} target="_blank" key={index}>
              {icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer__divisor"></div>
      <div className="anchors-copyright">
        <div className="anchors">
          {footerText.length > 0 &&
            footerText.map(({ link, title }, index) => (
              <Anchor key={index} link={link}>
                {title}
              </Anchor>
            ))}
        </div>
        <small>Ⓒ Leonardo Rossi</small>
      </div>
    </footer>
  );
}
