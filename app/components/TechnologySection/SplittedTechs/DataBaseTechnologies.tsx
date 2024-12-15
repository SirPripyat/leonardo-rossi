import { TechnologyCards } from '../../TechnologyCards/TechnologyCards';
import postgresSqlLogo from '../../../assets/postgres-sql-logo.svg';

export default function DataBaseTechnologies() {
  return (
    <>
      <TechnologyCards text={'PostgresSQL'} image={postgresSqlLogo} />
    </>
  );
}
