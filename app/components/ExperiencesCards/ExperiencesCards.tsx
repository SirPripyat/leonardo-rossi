'use client';

import Image, { StaticImageData } from 'next/image';
import { IconButton } from '../IconButton/IconButton';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ExperiencesCards.scss';
import useExperiencesCards from './useExperiencesCards';

interface ExperiencesCardsProps {
  companyImage: StaticImageData;
  role: string;
  company: string;
  date: string;
  description: string;
  cardIsOpen?: boolean;
  skills: string[];
}
export default function ExperiencesCards({
  companyImage,
  role,
  company,
  date,
  description,
  cardIsOpen,
  skills,
}: ExperiencesCardsProps) {
  const { cardOpen, toggleCardOpen } = useExperiencesCards({
    cardIsOpen,
  });

  return (
    <div className="experiences-card">
      <div className="experiences-card__top-content" onClick={toggleCardOpen}>
        <div className="top-content__logo-role">
          <Image src={companyImage} alt={`${company} logo`} />
          <h4>{role}</h4>
        </div>
        <IconButton icon={cardOpen ? ChevronUp : ChevronDown} />
      </div>
      {cardOpen && (
        <>
          <hr className="experiences-card__line-divisor" />
          <div className="experiences-card__bottom-content">
            <p className="bottom-content__company">{company}</p>
            <small className="bottom-content__date">{date}</small>
            <p>{description}</p>
            <div className="bottom-content__skills-tags">
              {skills.map((skill, id) => (
                <div className="skills-tags" key={id}>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
