import { LanguageType } from "../types/language";
import pokemonLogo from "@/app/assets/Pokemon-Logo.png";
import { ProjectsText } from "../types/projectsText";

type ProjectsSectionText = {
  [key in LanguageType]: {
    title: string;
    projects: ProjectsText[];
  };
};

export const projectText: ProjectsSectionText = {
  "pt-br": {
    title: "Projetos",
    projects: [
      {
        title: "Pokedéx",
        description:
          "Pokédex utilizando ReactJs, NextJs 13, Typescript e TailwindCSS",
        link: "https://pokedex-next-ca26ec4b27cc.herokuapp.com/",
        githubLink: "https://github.com/SirPripyat/pokemon",
        image: pokemonLogo,
      },
    ],
  },
  "us-en": {
    title: "Projects",
    projects: [
      {
        title: "Pokedéx",
        description:
          "Pokédex using ReactJs, NextJs 13, Typescript and TailwindCSS",
        link: "https://pokedex-next-ca26ec4b27cc.herokuapp.com/",
        githubLink: "https://github.com/SirPripyat/pokemon",
        image: pokemonLogo,
      },
    ],
  },
};
