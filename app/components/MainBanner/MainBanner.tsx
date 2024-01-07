/* eslint-disable react/jsx-no-comment-textnodes */
import leonardoRossiProfilePicture from "../../assets/profilePicture.png";
import Image from "next/image";
import { Button } from "../Button";
import "./MainBanner.scss";

export function MainBanner() {
  return (
    <section className="main-banner">
      <Image
        src={leonardoRossiProfilePicture}
        alt={"Leonardo Rossi Developer Thumbnail"}
      />
      <div className="main-banner__apresentation">
        <div className="apresentation">
          <p>Olá, eu sou o</p>
          <h1>{"<Leonardo Rossi/>"}</h1>
          <p className="comment-subtitle">// Desenvolvedor FullStack</p>
        </div>
        <div className="buttons-area">
          <Button.Root
            variant={"Filled"}
            targetValue={"_blank"}
            link="https://drive.google.com/file/d/1muUo9jyYYyGoa1aQtSZ-Ev9MHCCWw4vr/view"
          >
            Ver currículo
          </Button.Root>
          <Button.Root variant={"Outlined"} link="#contacts">
            Contatos
          </Button.Root>
        </div>
      </div>
    </section>
  );
}
