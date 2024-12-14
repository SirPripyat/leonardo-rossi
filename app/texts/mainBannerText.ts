import { LanguageType } from '../types/language';

type MainBannerText = {
  [key in LanguageType]: {
    apresentation: string;
    name: string;
    profession: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export const mainBannerText: MainBannerText = {
  'pt-br': {
    apresentation: 'Olá, eu sou o',
    name: '<Leonardo Rossi/>',
    profession: '// Desenvolvedor FullStack',
    primaryButton: 'Ver currículo',
    secondaryButton: 'Contatos',
  },
  'us-en': {
    apresentation: "Hello, I'm",
    name: '<Leonardo Rossi/>',
    profession: '// FullStack Developer',
    primaryButton: 'See resume',
    secondaryButton: 'Contacts',
  },
};
