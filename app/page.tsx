import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contacts } from "./components/Contacts/Contacts";
import { MainBanner } from "./components/MainBanner/MainBanner";
import { MainProjects } from "./components/MainProjects/MainProjects";
import { TechnologySection } from "./components/TechnologySection/TechnologySection";

export default function Home() {
  return (
    <>
      <main>
        <MainBanner />
        <AboutMe />
        <TechnologySection />
        <MainProjects />
        <Contacts />
      </main>
    </>
  );
}
