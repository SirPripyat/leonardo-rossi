'use client';

import './Contacts.scss';
import { ContactCards } from '../ContactCards/ContactCards';
import useToggleLanguageText from '@/app/hooks/useToggleText';
import { contactTexts } from '@/app/texts/contactText';
import { contactsContent } from '@/app/utils/contactsContent';

export function Contacts() {
  const {
    text: { title },
  } = useToggleLanguageText(contactTexts);

  return (
    <section id="contacts">
      <h2 className="contacts__title">{title}</h2>
      <div className="contacts__card-area">
        {contactsContent.map((contact, index) => (
          <ContactCards key={index} {...contact} />
        ))}
      </div>
    </section>
  );
}
