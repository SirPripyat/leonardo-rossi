import { StaticImageData } from 'next/image';
import { LanguageType } from '../types/language';
import happyLogo from '@/app/assets/happy-logo.svg';
import elotechLogo from '@/app/assets/elotech-logo.svg';
import big2Logo from '@/app/assets/big2-logo.svg';
import quantzedLogo from '@/app/assets/quantzed-logo.svg';
import { ProgrammingRole } from '../types/programmingRole';

type ExperiencesText = {
  [key in LanguageType]: {
    title: string;
    company: {
      companyImage: StaticImageData;
      role: ProgrammingRole;
      company: string;
      date: string;
      description: string;
      cardIsOpen?: boolean;
      skills: string[];
    }[];
  };
};

const elotechBase = {
  company: 'Elotech',
  skills: ['Java', 'Spring Boot', 'React', 'Angular'],
};

const happyBase = {
  company: 'Happy Brasil',
  skills: ['Java', 'Spring Boot', 'React', 'SASS'],
};

const big2Base = {
  company: 'Big2',
  skills: ['React', 'Next', 'Tailwind CSS'],
};

const quantzedBase = {
  company: 'Quantzed',
  skills: ['UX/UI'],
};

export const experiencesText: ExperiencesText = {
  'pt-br': {
    title: 'Experiência',
    company: [
      {
        companyImage: elotechLogo,
        role: 'FullStack',
        company: elotechBase.company,
        date: 'Set 2024 -',
        description:
          'Sou desenvolvedor Fullstack na Elotech, com foco no back-end, atuando no time de Plataforma. Sou responsável pelos projetos base da empresa e pela manutenção das bibliotecas internas, garantindo a eficiência e a integração das soluções',
        cardIsOpen: true,
        skills: elotechBase.skills,
      },
      {
        companyImage: happyLogo,
        role: 'FullStack',
        company: happyBase.company,
        date: 'Dez 2023 - Set 2024',
        description:
          'Como desenvolvedor Fullstack, eu me especializo em Java, SpringBoot e ReactJS. No backend, eu desenvolvo funcionalidades e garanto o fluxo de dados com Java e SpringBoot. Simultaneamente, no frontend, eu crio interfaces dinâmicas com ReactJS. Minha abordagem colaborativa demonstra versatilidade no manuseio de diversas tarefas Fullstack. Essa experiência enriquece minha jornada profissional, promovendo um crescimento contínuo.',
        skills: happyBase.skills,
      },
      {
        companyImage: big2Logo,
        role: 'Front-End',
        company: big2Base.company,
        date: 'Jul 2023 - Nov 2023',
        description:
          'Em meu papel de meio período como Desenvolvedor Front-End na Big2, eu desenvolvi independentemente três sistemas web: VendeLivros para integração com o marketplace de vendedores de livros, Big2 para gerenciamento abrangente de marketplace, e O Melhor Frete para cotação de frete.',
        skills: big2Base.skills,
      },
      {
        companyImage: quantzedLogo,
        role: 'Front-End',
        company: quantzedBase.company,
        date: 'Nov 2021 - Fev 2023',
        description:
          'Trabalhei no desenvolvimento de protótipos responsivos utilizando a ferramenta do Figma para estratégias quantitativas do mercado financeiro. Auxiliei o time de Front-End colocando em prática o Design System nos projetos com as tecnologias de HTML/CSS, Angular e SASS.',
        skills: quantzedBase.skills,
      },
    ],
  },
  'us-en': {
    title: 'Experience',
    company: [
      {
        companyImage: elotechLogo,
        role: 'FullStack',
        company: elotechBase.company,
        date: 'Set 2024 -',
        description:
          "I am a Fullstack developer at Elotech, focusing on back-end development as part of the Platform team. I am responsible for the company's core projects and the maintenance of internal libraries, ensuring the efficiency and integration of solutions.",
        cardIsOpen: true,
        skills: elotechBase.skills,
      },
      {
        companyImage: happyLogo,
        role: 'FullStack',
        company: happyBase.company,
        date: 'Dec 2023 - Set 2024',
        description:
          'As a Fullstack Developer, I specialize in Java, SpringBoot, and ReactJS. On the backend, I develop features and ensure data flow with Java and SpringBoot. Simultaneously, on the front-end, I create dynamic interfaces with ReactJS. My collaborative approach showcases versatility in handling diverse Fullstack tasks. This experience enriches my professional journey, fostering continuous growth.',
        skills: happyBase.skills,
      },
      {
        companyImage: big2Logo,
        role: 'Front-End',
        company: big2Base.company,
        date: 'Jul 2023 - Nov 2023',
        description:
          'In my part-time role as a Front-End Developer at Big2, I independently developed three web systems: VendeLivros for booksellers marketplace integration, Big2 for comprehensive marketplace management, and O Melhor Frete for freight quotation.',
        skills: big2Base.skills,
      },
      {
        companyImage: quantzedLogo,
        role: 'Front-End',
        company: quantzedBase.company,
        date: 'Nov 2021 - Feb 2023',
        description:
          'I worked on the development of responsive prototypes using Figma for quantitative strategies in the financial market. I assisted the Front-End team by implementing the Design System in projects using technologies such as HTML/CSS, Angular, and SASS.',
        skills: quantzedBase.skills,
      },
    ],
  },
};
