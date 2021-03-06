import { attributes as _confirm } from '@database/pages/confirm.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

import Playground from '@pages/confirm/partials/playground/Playground';

import styles from '@pages/confirm/index.module.scss';

function Confirm(): JSX.Element {
  const { _dbPageMeta, _dbConfirmBanner } = _confirm;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="confirm">
      <BannerProduct
        classNamePrefix="confirm"
        routeId={_dbPageMeta?.routeId}
        content={_dbConfirmBanner}
      />
      <div className={styles.confirm}>
        <div className={styles.confirm__container}>
          <Playground />
        </div>
      </div>
    </Layout>
  );
}

export default Confirm;
