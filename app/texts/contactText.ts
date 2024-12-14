import { LanguageType } from '../types/language';

type ContactTexts = {
  [key in LanguageType]: {
    title: string;
  };
};

export const contactTexts: ContactTexts = {
  'pt-br': {
    title: 'Contatos',
  },
  'us-en': {
    title: 'Contacts',
  },
};
