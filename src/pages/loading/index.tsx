import { attributes as _loading } from '@database/pages/loading.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

import LoadingPlayground from '@pages/loading/partials/loading-playground/LoadingPlayground';

import styles from '@pages/loading/index.module.scss';

function Loading(): JSX.Element {
  const { _dbMeta, _dbLoadingBanner } = _loading;

  return (
    <Layout meta={_dbMeta} classNamePrefix="loading">
      <BannerProduct
        classNamePrefix="loading"
        routeId={_dbMeta?.routeId}
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
