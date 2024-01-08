"use client";

import { X } from "lucide-react";
import "./MenuMobile.scss";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button";
import { useMenuMobileStore } from "@/app/store/menuMobile";
import useToggleMenuMobileText from "./useToggleMenuMobileText";

export function MenuMobile() {
  const { menuMobileIsOpen, toggleMenuMobile } = useMenuMobileStore();

  const { menuMobileText } = useToggleMenuMobileText();

  return (
    menuMobileIsOpen && (
      <div className="menu-mobile">
        <IconButton icon={X} clickAction={toggleMenuMobile} />
        <div>
          {menuMobileText.length > 0 &&
            menuMobileText.map(({ label, link }, index) => (
              <Button.Root
                key={index}
                variant={"Ghosted"}
                clickAction={toggleMenuMobile}
                link={link}
              >
                {label}
              </Button.Root>
            ))}
        </div>
      </div>
    )
  );
}
