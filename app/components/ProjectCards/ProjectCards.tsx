import { Eye } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";
import { Button } from "../Button";
import "./ProjectCards.scss";
import Image from "next/image";
import useToggleButtonsText from "./useToggleButtonsText";

export interface ProjectCardsProps {
  link: string;
  title: string;
  image: any;
  description: string;
  githubLink: string;
}

export function ProjectCards({
  link,
  title,
  image,
  description,
  githubLink,
}: ProjectCardsProps) {
  const {
    buttonsText: { mainButton, secondaryButton },
  } = useToggleButtonsText();

  return (
    <div className="project-cards">
      <div className="project-cards__thumbnail">
        <Image src={image} alt={`${title}'s thumbnail`} />
      </div>
      <div className="project-cards__information">
        <div className="information">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="information__buttons-area">
          <Button.Root variant={"Filled"} link={link} targetValue={"_blank"}>
            <Button.Icon icon={Eye} />
            {mainButton}
          </Button.Root>
          <Button.Root
            variant={"Outlined"}
            link={githubLink}
            targetValue={"_blank"}
          >
            <Button.Icon icon={RxGithubLogo} />
            {secondaryButton}
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
