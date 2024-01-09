import Image from "next/image";
import "./TechnologyCards.scss";

export interface TechnologyCardsProps {
  image: string;
  text: string;
}

export function TechnologyCards({ image, text }: TechnologyCardsProps) {
  return (
    <div className="technology-cards">
      <div className="thumbnail">
        <Image src={image} alt={`${text}'s thumbnail`} />
      </div>
      <p>{text}</p>
    </div>
  );
}
