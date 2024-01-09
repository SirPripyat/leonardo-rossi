import { TechnologyCards } from "../../TechnologyCards/TechnologyCards";
import htmlLogo from "../../../assets/html-logo.svg";
import cssLogo from "../../../assets/css-logo.svg";
import javascriptLogo from "../../../assets/javascript-logo.svg";
import typescriptLogo from "../../../assets/typescript-logo.svg";
import reactjsLogo from "../../../assets/reactjs-logo.svg";
import nextLogo from "../../../assets/nextjs.svg";
import tailwindCSS from "../../../assets/tailwindCSS.svg";
import sassLogo from "../../../assets/sass.svg";

export default function FrontEndTechnologys() {
  return (
    <>
      <TechnologyCards text={"HTML 5"} image={htmlLogo} />
      <TechnologyCards text={"CSS 3"} image={cssLogo} />
      <TechnologyCards text={"SASS"} image={sassLogo} />
      <TechnologyCards text={"Tailwind CSS"} image={tailwindCSS} />
      <TechnologyCards text={"JavaScript"} image={javascriptLogo} />
      <TechnologyCards text={"TypeScript"} image={typescriptLogo} />
      <TechnologyCards text={"React JS"} image={reactjsLogo} />
      <TechnologyCards text={"Next JS"} image={nextLogo} />
    </>
  );
}
