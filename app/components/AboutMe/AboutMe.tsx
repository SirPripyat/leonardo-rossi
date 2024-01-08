"use client";

import "./AboutMe.scss";
import useToggleAboutMexText from "./useToggleAboutMexText";

export function AboutMe() {
  const {
    aboutMeText: { title, phragraphs },
  } = useToggleAboutMexText();

  return (
    <section id="aboutMe">
      <h2 className="about-me__title">{title}</h2>
      <div className="about-me__text-container">
        {phragraphs?.map((phragraph, index) => <p key={index}>{phragraph}</p>)}
      </div>
    </section>
  );
}
