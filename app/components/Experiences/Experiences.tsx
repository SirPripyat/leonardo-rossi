import ExperiencesCards from "../ExperiencesCards/ExperiencesCards";
import quantzedLogo from "../../assets/quantzed-logo.png";
import big2Logo from "../../assets/big2-logo.jpeg";
import happyLogo from "../../assets/happyLogo.png";
import "./Experiences.scss";

export default function Experiences() {
  return (
    <section id="experiences" className="experiences-container ">
      <h2>Experiências</h2>
      <div className="experiences-container__companys">
        <ExperiencesCards
          companyImage={happyLogo}
          role="FullStack Developer"
          company="Happy Brasil"
          date="Dez 2023 -"
          description="As a Fullstack Developer, I specialize in Java, SpringBoot, and ReactJS. On the backend, I develop
          features and ensure data flow with Java and SpringBoot. Simultaneously, on the front-end, I create
          dynamic interfaces with ReactJS. My collaborative approach showcases versatility in handling diverse
          Fullstack tasks. This experience enriches my professional journey, fostering continuous growth."
          cardIsOpen
        />
        <ExperiencesCards
          companyImage={big2Logo}
          role="Front-End Developer"
          company="Big2"
          date="Jul 2023 - Nov 2023"
          description="In my part-time role as a Front-End Developer at Big2, I independently developed three web
          systems: VendeLivros for booksellers' marketplace integration, Big2 for comprehensive marketplace
          management, and O Melhor Frete for freight quotation."
        />
        <ExperiencesCards
          companyImage={quantzedLogo}
          role="Front-End Developer"
          company="Quantzed"
          date="Nov 2021 - Feb 2023"
          description="As a Front-End Developer, I made efforts to enhance the developer experience (DX) by collaborating on
          the company's Design System. Through initiatives, I improved interface UX, ensuring a seamless and
          user-friendly experience across projects."
        />
      </div>
    </section>
  );
}
