"use client";

import "./Projects.scss";
import { ProjectCards } from "../ProjectCards/ProjectCards";
import useToggleProjectsText from "./useToggleProjectsText";

export function Projects() {
  const {
    projectsText: { title, projects },
  } = useToggleProjectsText();

  return (
    <section id="projects">
      <h2 className="projects__title">{title}</h2>
      {projects?.map(
        ({ title, description, link, gitHubLink, image }, index) => (
          <ProjectCards
            key={index}
            title={title}
            description={description}
            image={image}
            link={link}
            githubLink={gitHubLink}
          />
        )
      )}
    </section>
  );
}
