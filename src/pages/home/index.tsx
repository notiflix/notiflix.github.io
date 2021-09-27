import { attributes as _home } from '@database/pages/home.md';

import Layout from '@components/layout/Layout';

import HomeSlider from '@pages/home/partials/home-slider/HomeSlider';
import HomeBrowsers from '@pages/home/partials/home-browsers/HomeBrowsers';
import HomeGetItOn from '@pages/home/partials/home-getiton/HomeGetItOn';
import HomeProducts from '@pages/home/partials/home-products/HomeProducts';

import styles from '@pages/home/index.module.scss';

function Home(): JSX.Element {
  const { _dbPageMeta } = _home;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="home">
      <HomeSlider />
      <div className={styles.home__getiton__browsers}>
        <div className={styles.home__getiton__browsers__container}>
          <HomeBrowsers />
          <HomeGetItOn />
        </div>
      </div>
      <HomeProducts />
    </Layout>
  );
}

export default Home;
