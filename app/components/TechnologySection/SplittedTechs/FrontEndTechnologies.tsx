import { TechnologyCards } from '../../TechnologyCards/TechnologyCards';
import javascriptLogo from '../../../assets/javascript-logo.svg';
import typescriptLogo from '../../../assets/typescript-logo.svg';
import reactjsLogo from '../../../assets/reactjs-logo.svg';
import nextLogo from '../../../assets/nextjs.svg';
import tailwindCSS from '../../../assets/tailwindCSS.svg';
import sassLogo from '../../../assets/sass.svg';
import angularLogo from '../../../assets/angular-logo.svg';

export default function FrontEndTechnologies() {
  return (
    <>
      <TechnologyCards text={'SASS'} image={sassLogo} />
      <TechnologyCards text={'Tailwind CSS'} image={tailwindCSS} />
      <TechnologyCards text={'JavaScript'} image={javascriptLogo} />
      <TechnologyCards text={'TypeScript'} image={typescriptLogo} />
      <TechnologyCards text={'React'} image={reactjsLogo} />
      <TechnologyCards text={'Next'} image={nextLogo} />
      <TechnologyCards text={'Angular'} image={angularLogo} />
    </>
  );
}
