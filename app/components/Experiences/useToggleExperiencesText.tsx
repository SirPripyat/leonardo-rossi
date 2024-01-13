import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { StaticImageData } from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import happyLogo from "../../assets/happy-logo.svg";
import big2Logo from "../../assets/big2-logo.svg";
import quantzedLogo from "../../assets/quantzed-logo.svg";

type ExperiencesText = {
  companyImage: StaticImageData;
  role: string;
  company: string;
  date: string;
  description: string;
  cardIsOpen?: boolean;
  skills: string[];
};

export default function useToggleExperiencesText() {
  const { language } = useContext(LanguageContext);

  const [experiencesText, setExperiencesText] = useState<ExperiencesText[]>([]);

  const toggleExperiencesText = useCallback(() => {
    if (language === "pt-br")
      return setExperiencesText([
        {
          companyImage: happyLogo,
          role: "FullStack",
          company: "Happy Brasil",
          date: "Dez 2023 -",
          description:
            "Como desenvolvedor Fullstack, eu me especializo em Java, SpringBoot e ReactJS. No backend, eu desenvolvo funcionalidades e garanto o fluxo de dados com Java e SpringBoot. Simultaneamente, no frontend, eu crio interfaces dinâmicas com ReactJS. Minha abordagem colaborativa demonstra versatilidade no manuseio de diversas tarefas Fullstack. Essa experiência enriquece minha jornada profissional, promovendo um crescimento contínuo.",
          cardIsOpen: true,
          skills: ["Java", "SpringBoot", "ReactJS", "TypeScript"],
        },
        {
          companyImage: big2Logo,
          role: "Front-End",
          company: "Front-End",
          date: "Jul 2023 - Nov 2023",
          description:
            "Em meu papel de meio período como Desenvolvedor Front-End na Big2, eu desenvolvi independentemente três sistemas web: VendeLivros para integração com o marketplace de vendedores de livros, Big2 para gerenciamento abrangente de marketplace, e O Melhor Frete para cotação de frete.",
          skills: ["ReactJS", "TypeScript", "NextJS", "Tailwind CSS"],
        },
        {
          companyImage: quantzedLogo,
          role: "Front-End e UX/UI",
          company: "Quantzed",
          date: "Nov 2021 - Feb 2023",
          description:
            "Como Desenvolvedor Front-End, eu me esforcei para aprimorar a experiência do desenvolvedor (DX) colaborando no Design System da empresa. Através de iniciativas, melhorei a experiência do usuário (UX) da interface, garantindo uma experiência fluida e amigável em todos os projetos.",
          skills: ["TypeScript", "Angular", "UX/UI", "SASS"],
        },
      ]);

    if (language === "us-en")
      return setExperiencesText([
        {
          companyImage: happyLogo,
          role: "FullStack",
          company: "Happy Brasil",
          date: "Dec 2023 -",
          description:
            "As a Fullstack Developer, I specialize in Java, SpringBoot, and ReactJS. On the backend, I develop features and ensure data flow with Java and SpringBoot. Simultaneously, on the front-end, I create dynamic interfaces with ReactJS. My collaborative approach showcases versatility in handling diverse Fullstack tasks. This experience enriches my professional journey, fostering continuous growth.",
          cardIsOpen: true,
          skills: ["Java", "SpringBoot", "ReactJS", "TypeScript"],
        },
        {
          companyImage: big2Logo,
          role: "Front-End",
          company: "Big2",
          date: "Jul 2023 - Nov 2023",
          description:
            "In my part-time role as a Front-End Developer at Big2, I independently developed three websystems: VendeLivros for booksellers' marketplace integration, Big2 for comprehensive marketplace management, and O Melhor Frete for freight quotation.",
          skills: ["ReactJS", "TypeScript", "NextJS", "Tailwind CSS"],
        },
        {
          companyImage: quantzedLogo,
          role: "Front-End and UX/UI",
          company: "Quantzed",
          date: "Nov 2021 - Feb 2023",
          description:
            "As a Front-End Developer and UX/UI Designer, I made efforts to enhance the developer experience (DX) by collaborating on the company's Design System. Through initiatives, I improved interface UX, ensuring a seamless and user-friendly experience across projects.",
          skills: ["TypeScript", "Angular", "UX/UI", "SASS"],
        },
      ]);
  }, [language]);

  useEffect(() => {
    toggleExperiencesText();
  }, [toggleExperiencesText]);

  return {
    experiencesText,
  };
}
