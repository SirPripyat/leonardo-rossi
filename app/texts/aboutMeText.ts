import { LanguageType } from '@/app/types/language';

type AboutMeText = {
  [key in LanguageType]: {
    title: string;
    paragraph: string[];
  };
};

export const aboutMeText: AboutMeText = {
  'pt-br': {
    title: 'Sobre mim',
    paragraph: [
      'Sou um engenheiro de software apaixonado por enfrentar novos desafios e adquirir conhecimento em diversas áreas. Acredito que um desenvolvedor deve ser um camaleão, adaptando-se às necessidades de diferentes projetos e suas regras de negócio. Com um ano e meio de experiência em UX Design, pude aprimorar minha compreensão das tecnologias de Front-End.  Atualmente, meu foco principal é o desenvolvimento back-end, utilizando tecnologias como Java, Spring Boot, React e Angular no meu dia a dia.',
    ],
  },
  'us-en': {
    title: 'About me',
    paragraph: [
      'I am a software engineer passionate about facing new challenges and acquiring knowledge in various areas. I believe that a developer should be a chameleon, adapting to the needs of different projects and their business rules. With a year and a half of experience in UX Design, I have been able to enhance my understanding of Front-End technologies. Currently, my main focus is on back-end development, using technologies such as Java, Spring Boot, React, and Angular in my daily work.',
    ],
  },
};
