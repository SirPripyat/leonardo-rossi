"use client";

import "./TechnologySection.scss";
import useToggleTechnologyText from "./useToggleTechnologyText";
import type { TabsProps } from "antd";
import DataBaseTechnologys from "./SplittedTechs/DataBaseTechnologys";
import FrontEndTechnologys from "./SplittedTechs/FrontEndTechnologys";
import BackEndTechnologys from "./SplittedTechs/BackEndTechnologys";
import TechnologysTabs from "../TechnologysTabs/TechnologysTabs";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Banco de Dados",
    children: <DataBaseTechnologys />,
  },
  {
    key: "2",
    label: "Back-End",
    children: <BackEndTechnologys />,
  },
  {
    key: "3",
    label: "Front-End",
    children: <FrontEndTechnologys />,
  },
];

export function TechnologySection() {
  const {
    technologyText: { title },
  } = useToggleTechnologyText();

  return (
    <section id="technology">
      <h2 className="technology-section__title">{title}</h2>
      <TechnologysTabs />
    </section>
  );
}
