import { attributes as _home } from '@database/pages/home.md';

import LogoYarn from '@components/logo/LogoYarn';
import LogoNPM from '@components/logo/LogoNPM';
import LogoGitHub from '@components/logo/LogoGitHub';

function HomeGetItOn(): JSX.Element {
  const { _dbHomeGetItOn } = _home;

  console.log(_dbHomeGetItOn?.title);
  console.log(_dbHomeGetItOn?.yarn);
  console.log(_dbHomeGetItOn?.npm);
  console.log(_dbHomeGetItOn?.github);

  return (
    <div>
      <h1>HomeGetItOn</h1>
      <LogoYarn />
      <LogoNPM />
      <LogoGitHub />
    </div>
  );
}

export default HomeGetItOn;
