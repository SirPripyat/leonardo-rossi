import Image from "next/image";
import "../styles/components/TechnologyCards.scss";

export interface TechnologyCardsProps {
  techImage: string;
  techText: string;
}

export function TechnologyCards({ techImage, techText }: TechnologyCardsProps) {
  return (
    <div className="technology-cards">
      <div className="thumbnail">
        <Image src={techImage} alt={`${techText}'s thumbnail`} />
      </div>
      <h4>{techText}</h4>
    </div>
  );
}
