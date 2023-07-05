import { ElementType } from "react";
import "../styles/components/ContactCards.scss";
import Link from "next/link";

export interface ContactCardsProps {
  contactIcon: ElementType;
  contactName: string;
  contactLink: string;
}

export function ContactCards({
  contactIcon: Icon,
  contactName,
  contactLink,
}: ContactCardsProps) {
  return (
    <Link href={contactLink} target="_blank" className="contact-cards">
      <div className="contact-cards__thumbnail">
        <Icon />
      </div>
      <h4>{contactName}</h4>
    </Link>
  );
}
