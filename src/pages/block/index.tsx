import { attributes as _block } from '@database/pages/block.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

import BlockPlayground from '@pages/block/partials/block-playground/BlockPlayground';

import styles from '@pages/block/index.module.scss';

function Block(): JSX.Element {
  const { _dbPageMeta, _dbBlockBanner } = _block;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="block">
      <BannerProduct
        classNamePrefix="block"
        routeId={_dbPageMeta?.routeId}
        content={_dbBlockBanner}
      />
      <div className={styles.block}>
        <div className={styles.block__container}>
          <BlockPlayground />
        </div>
      </div>
    </Layout>
  );
}

export default Block;
