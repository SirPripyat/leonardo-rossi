import { TechnologyCards } from "../../TechnologyCards/TechnologyCards";
import nodejsLogo from "../../../assets/nodejs-logo.svg";
import expressjsLogo from "../../../assets/expressjs-logo.svg";
import javaLogo from "../../../assets/java-logo.svg";
import springBootLogo from "../../../assets/springboot-logo.svg";

export default function BackEndTechnologys() {
  return (
    <>
      <TechnologyCards text={"Node JS"} image={nodejsLogo} />
      <TechnologyCards text={"Express JS"} image={expressjsLogo} />
      <TechnologyCards text={"Java"} image={javaLogo} />
      <TechnologyCards text={"SpringBoot"} image={springBootLogo} />
    </>
  );
}
