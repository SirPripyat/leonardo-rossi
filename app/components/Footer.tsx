import Image from "next/image";
import leonardoRossiLogoGreen from "../assets/logo-green.svg";
import "../styles/components/Footer.scss";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { Anchor } from "./Anchor";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-social-media">
        <Image src={leonardoRossiLogoGreen} alt="Leonardo Rossi Logo" />

        <div className="social-media">
          <Link
            href="https://www.linkedin.com/in/leonardo-rossi-43715b209/"
            target="_blank"
          >
            <RxLinkedinLogo />
          </Link>
          <Link href="https://github.com/SirPripyat" target="_blank">
            <RxGithubLogo />
          </Link>
          <Link href="mailto:08.leo.rossi@gmail.com" target="_blank">
            <BiLogoGmail />
          </Link>
        </div>
      </div>
      <div className="footer__divisor"></div>
      <div className="anchors-copyright">
        <div className="anchors">
          <Anchor link="#aboutMe">Sobre Mim</Anchor>
          <Anchor link="#technology">Tecnologias</Anchor>
          <Anchor link="#mainProjects">Principais Projetos</Anchor>
          <Anchor link="#contacts">Contatos</Anchor>
        </div>
        <small>Ⓒ Leonardo Rossi</small>
      </div>
    </footer>
  );
}
