import { X } from "lucide-react";
import "./MenuMobile.scss";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button";

export interface MenuMobileProps {
  isMenuMobileOpen: any;
  closeMenuMobile: any;
}

export function MenuMobile({
  isMenuMobileOpen,
  closeMenuMobile,
}: MenuMobileProps) {
  return isMenuMobileOpen ? (
    <div className="menu-mobile">
      <IconButton icon={X} clickAction={closeMenuMobile} />
      <div>
        <Button.Root
          variant={"Ghosted"}
          clickAction={closeMenuMobile}
          link={"#aboutMe"}
        >
          Sobre mim
        </Button.Root>
        <Button.Root
          variant={"Ghosted"}
          clickAction={closeMenuMobile}
          link={"#technology"}
        >
          Tecnologias
        </Button.Root>
        <Button.Root
          variant={"Ghosted"}
          clickAction={closeMenuMobile}
          link={"#mainProjects"}
        >
          Principais Projetos
        </Button.Root>
        <Button.Root
          variant={"Ghosted"}
          clickAction={closeMenuMobile}
          link={"#contacts"}
        >
          Contatos
        </Button.Root>
      </div>
    </div>
  ) : null;
}
