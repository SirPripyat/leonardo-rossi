import { LanguageType } from '../types/language';

type PageAnchorsText = {
  [key in LanguageType]: {
    label: string;
    link: string;
  }[];
};

export const pageAnchorsText: PageAnchorsText = {
  'pt-br': [
    { label: 'Sobre Mim', link: '#aboutMe' },
    { label: 'Experiências', link: '#experiences' },
    { label: 'Tecnologias', link: '#technology' },
    // { label: 'Projetos', link: '#projects' },
    { label: 'Contatos', link: '#contacts' },
  ],
  'us-en': [
    { label: 'About Me', link: '#aboutMe' },
    { label: 'Experiences', link: '#experiences' },
    { label: 'Technologies', link: '#technology' },
    // { label: 'Projects', link: '#projects' },
    { label: 'Contacts', link: '#contacts' },
  ],
};
