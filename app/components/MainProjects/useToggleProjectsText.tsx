import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type ProjectsText = {
  title: string;
  description: string;
  link: string;
  gitHubLink: string;
};

type ProjectsSectionText = {
  title: string;
  projects: ProjectsText[];
};

export default function useToggleProjectsText() {
  const [projectsText, setProjectsText] = useState<ProjectsSectionText>(
    {} as ProjectsSectionText
  );

  const { language } = useContext(LanguageContext);

  const toggleProjectsText = useCallback(() => {
    if (language === "pt-br")
      return setProjectsText({
        title: "Principais Projetos",
        projects: [
          {
            title: "Pokedéx",
            description:
              "Pokédex utilizando ReactJs, NextJs 13, Typescript e TailwindCSS",
            link: "https://pokedex-next-ca26ec4b27cc.herokuapp.com/",
            gitHubLink: "https://github.com/SirPripyat/pokemon",
          },
        ],
      });

    if (language === "us-en")
      return setProjectsText({
        title: "Main Projects",
        projects: [
          {
            title: "Pokedéx",
            description:
              "Pokédex using ReactJs, NextJs 13, Typescript and TailwindCSS",
            link: "https://pokedex-next-ca26ec4b27cc.herokuapp.com/",
            gitHubLink: "https://github.com/SirPripyat/pokemon",
          },
        ],
      });
  }, [language]);

  useEffect(() => {
    toggleProjectsText();
  }, [toggleProjectsText]);

  return {
    projectsText,
  };
}
