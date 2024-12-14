import { ElementType } from 'react';
import './ContactCards.scss';
import Link from 'next/link';

export interface ContactCardsProps {
  icon: ElementType;
  name: string;
  link: string;
}

export function ContactCards({ icon: Icon, name, link }: ContactCardsProps) {
  return (
    <Link href={link} target="_blank" className="contact-cards">
      <div className="contact-cards__thumbnail">
        <Icon />
      </div>
      <h4>{name}</h4>
    </Link>
  );
}
