import "../styles/components/MainProjects.scss";
import { ProjectCards } from "./ProjectCards";
import devGoLogo from "../assets/devGoLogo.png";

export function MainProjects() {
  return (
    <section id="mainProjects">
      <h1 className="main-projects__title">Principais Projetos</h1>
      <ProjectCards
        projectName={"DevGO API"}
        projectDescription={
          "Crawler + CRUD utilizando Typescript, NodeJS, ExpressJS e MongoDB"
        }
        projectImage={devGoLogo}
        projectLink={"https://dev-go-api-f61e053b126d.herokuapp.com/api-docs/"}
        githubLink={"https://github.com/SirPripyat/DevGoAPI"}
      />
      {/* <ProjectCards
        projectName={"DevGO Front-End"}
        projectDescription={
          "Consumo da API do projeto back-end [DevGo API] com ReactJS"
        }
        projectImage={devGoLogo}
        projectLink={""}
        githubLink={""}
      /> */}
    </section>
  );
}
