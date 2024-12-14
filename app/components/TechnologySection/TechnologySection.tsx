'use client';

import './TechnologySection.scss';
import useToggleTechnologyText from './useToggleTechnologyText';
import DataBaseTechnologys from './SplittedTechs/DataBaseTechnologys';
import FrontEndTechnologys from './SplittedTechs/FrontEndTechnologys';
import BackEndTechnologys from './SplittedTechs/BackEndTechnologys';
import Tabs from '../Tabs/Tabs';

const items = [
  {
    id: 1,
    name: 'Database',
    children: <DataBaseTechnologys />,
  },
  {
    id: 2,
    name: 'Back-End',
    children: <BackEndTechnologys />,
  },
  {
    id: 3,
    name: 'Front-End',
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
      <Tabs items={items} />
    </section>
  );
}
