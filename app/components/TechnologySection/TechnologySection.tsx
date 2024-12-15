'use client';

import './TechnologySection.scss';
import useToggleTechnologyText from './useToggleTechnologyText';
import DataBaseTechnologies from './SplittedTechs/DataBaseTechnologies';
import FrontEndTechnologies from './SplittedTechs/FrontEndTechnologies';
import BackEndTechnologies from './SplittedTechs/BackEndTechnologies';
import Tabs from '../Tabs/Tabs';
import MobileTechnologies from '@/app/components/TechnologySection/SplittedTechs/MobileTechnologies';

const items = [
  {
    id: 1,
    name: 'Database',
    children: <DataBaseTechnologies />,
  },
  {
    id: 2,
    name: 'Back-End',
    children: <BackEndTechnologies />,
  },
  {
    id: 3,
    name: 'Front-End',
    children: <FrontEndTechnologies />,
  },
  {
    id: 4,
    name: 'Mobile',
    children: <MobileTechnologies />,
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
