import { attributes as _loading } from '@database/pages/loading.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

import LoadingPlayground from '@pages/loading/partials/loading-playground/LoadingPlayground';

import styles from '@pages/loading/index.module.scss';

function Loading(): JSX.Element {
  const { _dbPageMeta, _dbLoadingBanner } = _loading;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="loading">
      <BannerProduct
        classNamePrefix="loading"
        routeId={_dbPageMeta?.routeId}
        content={_dbLoadingBanner}
      />
      <div className={styles.loading}>
        <div className={styles.loading__container}>
          <LoadingPlayground />
        </div>
      </div>
    </Layout>
  );
}

export default Loading;
