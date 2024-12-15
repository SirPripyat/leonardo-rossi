'use client';

import useToggleLanguageText from '@/app/hooks/useToggleText';
import ExperiencesCards from '../ExperiencesCards/ExperiencesCards';
import './Experiences.scss';
import { experiencesText } from '@/app/texts/experiencesText';

export default function Experiences() {
  const {
    text: { company, title },
  } = useToggleLanguageText(experiencesText);

  return (
    <section id="experiences" className="experiences-container ">
      <h2>{title}</h2>
      <div className="experiences-container__companys">
        {company.map((experience, id) => (
          <ExperiencesCards key={id} {...experience} />
        ))}
      </div>
    </section>
  );
}
