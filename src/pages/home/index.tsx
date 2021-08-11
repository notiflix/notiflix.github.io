import { attributes as _home } from '@database/pages/home.md';

import Layout from '@components/layout/Layout';

import HomeSlider from '@pages/home/partials/home-slider/HomeSlider';
import HomeGetItOn from '@pages/home/partials/home-getiton/HomeGetItOn';
import HomeBrowsers from '@pages/home/partials/home-browsers/HomeBrowsers';
import HomeProducts from '@pages/home/partials/home-products/HomeProducts';

function Home(): JSX.Element {
  const { _dbMeta } = _home;

  return (
    <Layout meta={_dbMeta} classNamePrefix="home">
      <HomeSlider />
      <HomeGetItOn />
      <HomeBrowsers />
      <HomeProducts />
    </Layout>
  );
}

export default Home;
