'use client';

import useToggleLanguageText from '@/app/hooks/useToggleText';
import './AboutMe.scss';
import { aboutMeText } from '@/app/texts/aboutMeText';

export function AboutMe() {
  const {
    text: { title, paragraph },
  } = useToggleLanguageText(aboutMeText);

  return (
    <section id="aboutMe">
      <h2 className="about-me__title">{title}</h2>
      <div className="about-me__text-container">
        {paragraph.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}
