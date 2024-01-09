"use client";

import Image, { StaticImageData } from "next/image";
import { IconButton } from "../IconButton/IconButton";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./ExperiencesCards.scss";
import useExperiencesCards from "./useExperiencesCards";

interface ExperiencesCardsProps {
  companyImage: StaticImageData;
  role: string;
  company: string;
  date: string;
  description: string;
  cardIsOpen?: boolean;
}
export default function ExperiencesCards({
  companyImage,
  role,
  company,
  date,
  description,
  cardIsOpen,
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
        <div className="experiences-card__bottom-content">
          <span className="bottom-content__company">
            <small>Empresa </small>
            <p>{company}</p>
          </span>
          <small>{date}</small>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
