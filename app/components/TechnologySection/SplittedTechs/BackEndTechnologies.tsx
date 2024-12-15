import { TechnologyCards } from '../../TechnologyCards/TechnologyCards';
import javaLogo from '../../../assets/java-logo.svg';
import springBootLogo from '../../../assets/springboot-logo.svg';

export default function BackEndTechnologies() {
  return (
    <>
      <TechnologyCards text={'Java'} image={javaLogo} />
      <TechnologyCards text={'SpringBoot'} image={springBootLogo} />
    </>
  );
}
