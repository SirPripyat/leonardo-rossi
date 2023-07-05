import { AboutMe } from "./components/AboutMe";
import { Contacts } from "./components/Contacts";
import { MainBanner } from "./components/MainBanner";
import { MainProjects } from "./components/MainProjects";
import { TechnologySection } from "./components/TechnologySection";

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
