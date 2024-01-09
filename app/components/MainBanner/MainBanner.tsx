"use client";

import leonardoRossiProfilePicture from "../../assets/profilePicture.png";
import Image from "next/image";
import { Button } from "../Button";
import "./MainBanner.scss";
import useToggleBannerText from "./useToggleBannerText";

export function MainBanner() {
  const {
    bannerText: {
      apresentation,
      name,
      profession,
      primaryButton,
      secondaryButton,
    },
  } = useToggleBannerText();

  return (
    <section className="main-banner">
      <Image
        src={leonardoRossiProfilePicture}
        alt={"Leonardo Rossi Developer Thumbnail"}
      />
      <div className="main-banner__apresentation">
        <div className="apresentation">
          <p>{apresentation}</p>
          <h1>{name}</h1>
          <p className="comment-subtitle">{profession}</p>
        </div>
        <div className="buttons-area">
          <Button.Root
            variant={"Filled"}
            targetValue={"_blank"}
            link="https://drive.google.com/file/d/1muUo9jyYYyGoa1aQtSZ-Ev9MHCCWw4vr/view"
          >
            {primaryButton}
          </Button.Root>
          <Button.Root variant={"Outlined"} link="#contacts">
            {secondaryButton}
          </Button.Root>
        </div>
      </div>
    </section>
  );
}
