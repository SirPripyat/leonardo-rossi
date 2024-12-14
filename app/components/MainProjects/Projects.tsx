'use client';

import './Projects.scss';
import { ProjectCards } from '../ProjectCards/ProjectCards';
import useToggleLanguageText from '@/app/hooks/useToggleText';
import { projectText } from '@/app/texts/projectsText';

export function Projects() {
  const {
    text: { title, projects },
  } = useToggleLanguageText(projectText);

  return (
    <section id="projects">
      <h2 className="projects__title">{title}</h2>
      {projects.map((project, index) => (
        <ProjectCards key={index} {...project} />
      ))}
    </section>
  );
}
