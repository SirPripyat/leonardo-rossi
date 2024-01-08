"use client";

import "./MainProjects.scss";
import { ProjectCards } from "../ProjectCards/ProjectCards";
import devGoLogo from "../../assets/devGoLogo.png";
import useToggleProjectsText from "./useToggleProjectsText";

export function MainProjects() {
  const {
    projectsText: { title, projects },
  } = useToggleProjectsText();

  return (
    <section id="mainProjects">
      <h1 className="main-projects__title">{title}</h1>
      {projects?.map(({ title, description, link, gitHubLink }, index) => (
        <ProjectCards
          key={index}
          title={title}
          description={description}
          image={devGoLogo}
          link={link}
          githubLink={gitHubLink}
        />
      ))}
    </section>
  );
}
