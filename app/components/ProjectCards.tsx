import { Eye } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";
import { Button } from "./Button";
import "../styles/components/ProjectCards.scss";
import Image from "next/image";

export interface ProjectCardsProps {
  projectLink: string;
  projectName: string;
  projectImage: any;
  projectDescription: string;
  githubLink: string;
}

export function ProjectCards({
  projectLink,
  projectName,
  projectImage,
  projectDescription,
  githubLink,
}: ProjectCardsProps) {
  return (
    <div className="project-cards">
      <div className="project-cards__thumbnail">
        <Image src={projectImage} alt={`${projectName}'s thumbnail`} />
      </div>
      <div className="project-cards__information">
        <div className="information">
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
        </div>
        <div className="information__buttons-area">
          <Button.Root
            variant={"Filled"}
            link={projectLink}
            targetValue={"_blank"}
          >
            <Button.Icon icon={Eye} />
            Ver Projeto
          </Button.Root>
          <Button.Root
            variant={"Outlined"}
            link={githubLink}
            targetValue={"_blank"}
          >
            <Button.Icon icon={RxGithubLogo} />
            Ver Projeto
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
