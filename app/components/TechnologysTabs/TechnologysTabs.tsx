"use client";

import { useState } from "react";
import "./TechnologysTabs.scss";
import DataBaseTechnologys from "../TechnologySection/SplittedTechs/DataBaseTechnologys";
import BackEndTechnologys from "../TechnologySection/SplittedTechs/BackEndTechnologys";
import FrontEndTechnologys from "../TechnologySection/SplittedTechs/FrontEndTechnologys";

export default function TechnologysTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const thisTabIsActive = (key: number) =>
    activeTab === key && "tabs-top__tab-active";

  const setActiveTabOnClick = (key: number) => setActiveTab(key);

  return (
    <div className="technologys-tabs">
      <div className="technologys-tabs__tabs-top">
        <button
          onClick={() => setActiveTabOnClick(1)}
          className={`tabs-top__tabs ${thisTabIsActive(1)}`}
        >
          Banco de Dados
        </button>
        <button
          onClick={() => setActiveTabOnClick(2)}
          className={`tabs-top__tabs ${thisTabIsActive(2)}`}
        >
          Back-End
        </button>
        <button
          onClick={() => setActiveTabOnClick(3)}
          className={`tabs-top__tabs ${thisTabIsActive(3)}`}
        >
          Front-End
        </button>
      </div>
      <div className="technologys-tabs__tabs-content">
        {activeTab === 1 && <DataBaseTechnologys />}
        {activeTab === 2 && <BackEndTechnologys />}
        {activeTab === 3 && <FrontEndTechnologys />}
      </div>
    </div>
  );
}
