import { attributes as _home } from '@database/pages/home.md';

import Layout from '@components/layout/Layout';

import Slider from '@pages/home/partials/slider/Slider';
import Browsers from '@pages/home/partials/browsers/Browsers';
import GetItOn from '@pages/home/partials/getiton/GetItOn';
import Products from '@pages/home/partials/products/Products';

import styles from '@pages/home/index.module.scss';

function Home(): JSX.Element {
  const { _dbPageMeta } = _home;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="home">
      <Slider />
      <div className={styles.home__getiton__browsers}>
        <div className={styles.home__getiton__browsers__container}>
          <Browsers />
          <GetItOn />
        </div>
      </div>
      <Products />
    </Layout>
  );
}

export default Home;
