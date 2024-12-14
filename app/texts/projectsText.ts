import { LanguageType } from '../types/language';
import pokemonLogo from '@/app/assets/Pokemon-Logo.png';
import { ProjectsText } from '../types/projectsText';

type ProjectsSectionText = {
  [key in LanguageType]: {
    title: string;
    projects: ProjectsText[];
  };
};

export const projectText: ProjectsSectionText = {
  'pt-br': {
    title: 'Projetos',
    projects: [
      {
        title: 'Pokedéx',
        description:
          'Pokédex desenvolvida utilizando ReactJs, NextJs 13, TypeScript e TailwindCSS',
        link: 'https://pokedex-next-ca26ec4b27cc.herokuapp.com/',
        githubLink: 'https://github.com/SirPripyat/pokemon',
        image: pokemonLogo,
      },
      {
        title: 'Pokedéx API',
        description:
          'Pokédex desenvolvida utilizando TypeScript, NodeJs, Express e MongoDB, com base na PokéAPI. Atualmente, está alimentando o meu projeto Pokedéx.',
        link: 'https://pokemon-api-d4e8682433d8.herokuapp.com/pokemon?page=1',
        githubLink: 'https://github.com/SirPripyat/pokemon-node-api',
        image: pokemonLogo,
      },
    ],
  },
  'us-en': {
    title: 'Projects',
    projects: [
      {
        title: 'Pokedéx',
        description:
          'Pokédex developed using ReactJs, NextJs 13, TypeScript and TailwindCSS',
        link: 'https://pokedex-next-ca26ec4b27cc.herokuapp.com/',
        githubLink: 'https://github.com/SirPripyat/pokemon',
        image: pokemonLogo,
      },
      {
        title: 'Pokedéx API',
        description:
          'Pokédex developed using TypeScript, NodeJs, Express and MongoDB, based on PokéAPI. Actually, this project provides data to my Pokedéx project.',
        link: 'https://pokemon-api-d4e8682433d8.herokuapp.com/pokemon?page=1',
        githubLink: 'https://github.com/SirPripyat/pokemon-node-api',
        image: pokemonLogo,
      },
    ],
  },
};
