import { LanguageContext } from "@/app/context/languageContext/LanguageContext";
import { useCallback, useContext, useEffect, useState } from "react";

type AboutMeText = {
  title: string;
  phragraphs: string[];
};

export default function useToggleAboutMexText() {
  const [aboutMeText, setAboutMeText] = useState<AboutMeText>(
    {} as AboutMeText
  );

  const { language } = useContext(LanguageContext);

  const toggleAboutMeText = useCallback(() => {
    if (language === "pt-br") {
      return setAboutMeText({
        title: "Sobre mim",
        phragraphs: [
          "Sou um estudante proativo de engenharia de software na Unicesumar. Minha especialização está em desenvolvimento full-stack, com foco em tecnologias front-end, especialmente NodeJS, ReactJS e NextJS. Possuo experiência prática na criação de interfaces de usuário dinâmicas e responsivas. Atualmente, estou ampliando meu conjunto de habilidades ao explorar Java com SpringBoot para o desenvolvimento de backend e Angular para o front-end. Minha paixão pela tecnologia e meu compromisso em permanecer na vanguarda das tendências da indústria impulsionam minha jornada contínua de aprendizado.",
        ],
      });
    }

    if (language === "us-en") {
      return setAboutMeText({
        title: "About me",
        phragraphs: [
          "I'm a proactive software engineering student at Unicesumar. My expertise lies in full-stack development with a focus on front-end technologies, particularly NodeJS, ReactJS, and NextJS. I have hands-on experience in crafting dynamic and responsive user interfaces. Currently, I'm expanding my skill set by delving into Java with SpringBoot for backend development and Angular for front-end. My passion for technology and commitment to staying at the forefront of industry trends drive my continuous learning journey.",
        ],
      });
    }
  }, [language]);

  useEffect(() => {
    toggleAboutMeText();
  }, [toggleAboutMeText]);

  return {
    aboutMeText,
  };
}
