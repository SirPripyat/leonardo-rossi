import "./TechnologySection.scss";
import htmlLogo from "../../assets/html-logo.svg";
import cssLogo from "../../assets/css-logo.svg";
import javascriptLogo from "../../assets/javascript-logo.svg";
import typescriptLogo from "../../assets/typescript-logo.svg";
import nodejsLogo from "../../assets/nodejs-logo.svg";
import reactjsLogo from "../../assets/reactjs-logo.svg";
import mongodbLogo from "../../assets/mongodb-logo.svg";
import expressjsLogo from "../../assets/expressjs-logo.svg";
import tailwindCSS from "../../assets/tailwindCSS.svg";
import sassLogo from "../../assets/sass.svg";
import { TechnologyCards } from "../TechnologyCards/TechnologyCards";

export function TechnologySection() {
  return (
    <section id="technology">
      <h1 className="technology-section__title">Tecnologias</h1>
      <div className="technology-section__cards-area">
        <TechnologyCards techText={"HTML 5"} techImage={htmlLogo} />
        <TechnologyCards techText={"CSS 3"} techImage={cssLogo} />
        <TechnologyCards techText={"SASS"} techImage={sassLogo} />
        <TechnologyCards techText={"Tailwind CSS"} techImage={tailwindCSS} />
        <TechnologyCards techText={"JavaScript"} techImage={javascriptLogo} />
        <TechnologyCards techText={"TypeScript"} techImage={typescriptLogo} />
        <TechnologyCards techText={"Node JS"} techImage={nodejsLogo} />
        <TechnologyCards techText={"React JS"} techImage={reactjsLogo} />
        <TechnologyCards techText={"MongoDB"} techImage={mongodbLogo} />
        <TechnologyCards techText={"Express JS"} techImage={expressjsLogo} />
      </div>
    </section>
  );
}
