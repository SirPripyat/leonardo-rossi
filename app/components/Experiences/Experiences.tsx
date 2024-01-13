"use client";

import ExperiencesCards from "../ExperiencesCards/ExperiencesCards";
import "./Experiences.scss";
import useToggleExperiencesText from "./useToggleExperiencesText";

export default function Experiences() {
  const { experiencesText } = useToggleExperiencesText();

  return (
    <section id="experiences" className="experiences-container ">
      <h2>Experiências</h2>
      <div className="experiences-container__companys">
        {experiencesText.map((experience, id) => (
          <ExperiencesCards key={id} {...experience} />
        ))}
      </div>
    </section>
  );
}
