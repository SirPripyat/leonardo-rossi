import { TechnologyCards } from "../../TechnologyCards/TechnologyCards";
import mongodbLogo from "../../../assets/mongodb-logo.svg";
import mysqlLogo from "../../../assets/mysql-logo.svg";

export default function DataBaseTechnologys() {
  return (
    <div className="technology-section__cards-area">
      <TechnologyCards text={"MongoDB"} image={mongodbLogo} />
      <TechnologyCards text={"MySQL"} image={mysqlLogo} />
    </div>
  );
}
