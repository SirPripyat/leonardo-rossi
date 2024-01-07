"use client";

import { X } from "lucide-react";
import "./MenuMobile.scss";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button";
import { useMenuMobileStore } from "@/app/store/menuMobile";

export function MenuMobile() {
  const { menuMobileIsOpen, toggleMenuMobile } = useMenuMobileStore();

  return (
    menuMobileIsOpen && (
      <div className="menu-mobile">
        <IconButton icon={X} clickAction={toggleMenuMobile} />
        <div>
          <Button.Root
            variant={"Ghosted"}
            clickAction={toggleMenuMobile}
            link={"#aboutMe"}
          >
            Sobre mim
          </Button.Root>
          <Button.Root
            variant={"Ghosted"}
            clickAction={toggleMenuMobile}
            link={"#technology"}
          >
            Tecnologias
          </Button.Root>
          <Button.Root
            variant={"Ghosted"}
            clickAction={toggleMenuMobile}
            link={"#mainProjects"}
          >
            Principais Projetos
          </Button.Root>
          <Button.Root
            variant={"Ghosted"}
            clickAction={toggleMenuMobile}
            link={"#contacts"}
          >
            Contatos
          </Button.Root>
        </div>
      </div>
    )
  );
}
