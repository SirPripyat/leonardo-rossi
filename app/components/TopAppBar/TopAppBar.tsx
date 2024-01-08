"use client";

import Image from "next/image";
import Link from "next/link";
import "./TopAppBar.scss";
import leonardoRossiLogo from "../../assets/logo-yellow.svg";
import brazilFlag from "../../assets/brazil-flag.svg";
import usaFlag from "../../assets/usa-flag.svg";
import { Button } from "../Button";
import { Menu } from "lucide-react";
import { IconButton } from "../IconButton/IconButton";
import { useMenuMobileStore } from "@/app/store/menuMobile";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import useToggleAnchorText from "./useToggleAnchorText";

export function TopAppBar() {
  const { toggleMenuMobile } = useMenuMobileStore();

  const { language, setLanguageOnClick } = useContext(LanguageContext);

  const { anchorText } = useToggleAnchorText();

  return (
    <>
      <header className="top-app-bar">
        <div className="top-app-bar__icon-logo">
          <i>
            <IconButton icon={Menu} clickAction={toggleMenuMobile} />
          </i>
          <Link href="/">
            <Image src={leonardoRossiLogo} alt="Leonardo Rossi Logo" />
          </Link>
        </div>
        <div className="top-app-bar__languages-anchors">
          <div className="anchors-wrapper">
            {anchorText.map(({ label, link }, index) => (
              <Button.Root key={index} variant={"Ghosted"} link={link}>
                {label}
              </Button.Root>
            ))}
          </div>
          <div className="languages-anchors__languages-buttons">
            <button
              className={`${
                language !== "pt-br" && "language-button__disabled"
              }`}
              onClick={() => setLanguageOnClick("pt-br")}
            >
              <Image src={brazilFlag} alt="Brazil Flag" />
            </button>
            <button
              className={`${
                language === "pt-br" && "language-button__disabled"
              }`}
              onClick={() => setLanguageOnClick("us-en")}
            >
              <Image src={usaFlag} alt="USA Flag" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
