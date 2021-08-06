import { attributes as _home } from '@database/pages/home.md';

import Layout from '@components/layout/Layout';

import HomeSlider from '@pages/home/partials/HomeSlider';

function Home(): JSX.Element {
  const { _dbMeta } = _home;

  return (
    <Layout meta={_dbMeta} classNamePrefix="home">
      <HomeSlider />
    </Layout>
  );
}

export default Home;
