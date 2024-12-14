import { AboutMe } from './components/AboutMe/AboutMe';
import { Contacts } from './components/Contacts/Contacts';
import Experiences from './components/Experiences/Experiences';
import { MainBanner } from './components/MainBanner/MainBanner';
import { Projects } from './components/MainProjects/Projects';
import { TechnologySection } from './components/TechnologySection/TechnologySection';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <AboutMe />
      <Experiences />
      <TechnologySection />
      <Projects />
      <Contacts />
    </main>
  );
}
