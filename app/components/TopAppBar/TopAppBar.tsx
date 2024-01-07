"use client";

import Image from "next/image";
import Link from "next/link";
import "./TopAppBar.scss";
import leonardoRossiLogo from "app/assets/logo-yellow.svg";
import { useState } from "react";
import { Button } from "../Button";
import { Menu } from "lucide-react";
import { IconButton } from "../IconButton/IconButton";
import { useMenuMobileStore } from "@/app/store/menuMobile";

export function TopAppBar() {
  const { toggleMenuMobile } = useMenuMobileStore();

  return (
    <>
      <header className="top-app-bar">
        <i>
          <IconButton icon={Menu} clickAction={toggleMenuMobile} />
        </i>
        <Link href="/" className="top-app-bar__logo">
          <Image src={leonardoRossiLogo} alt="Leonardo Rossi Logo" />
        </Link>
        <div className="top-app-bar__anchors">
          <Button.Root variant={"Ghosted"} link="#aboutMe">
            Sobre Mim
          </Button.Root>
          <Button.Root variant={"Ghosted"} link="#technology">
            Tecnologias
          </Button.Root>
          <Button.Root variant={"Ghosted"} link="#mainProjects">
            Principais Projetos
          </Button.Root>
          <Button.Root variant={"Ghosted"} link="#contacts">
            Contatos
          </Button.Root>
        </div>
      </header>
    </>
  );
}
