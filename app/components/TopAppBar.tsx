"use client";

import Image from "next/image";
import Link from "next/link";
import "app/styles/components/TopAppBar.scss";
import leonardoRossiLogo from "app/assets/logo-yellow.svg";
import { useState } from "react";
import { Button } from "./Button";
import { Home, Menu } from "lucide-react";
import { IconButton } from "./IconButton";
import { MenuMobile } from "./MenuMobile";
import { useRouter } from "next/navigation";

export function TopAppBar() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const router = useRouter();

  return (
    <header className="top-app-bar">
      <i>
        <IconButton icon={Menu} clickAction={() => setOpenMenuMobile(true)} />
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
      <MenuMobile
        isMenuMobileOpen={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(!openMenuMobile)}
      />
    </header>
  );
}
