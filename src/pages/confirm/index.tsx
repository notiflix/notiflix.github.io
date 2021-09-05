import { attributes as _confirm } from '@database/pages/confirm.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

// import ConfirmPlayground from '@pages/confirm/partials/confirm-playground/ConfirmPlayground';

import styles from '@pages/confirm/index.module.scss';

function Confirm(): JSX.Element {
  const { _dbMeta, _dbConfirmBanner } = _confirm;

  return (
    <Layout meta={_dbMeta} classNamePrefix="confirm">
      <BannerProduct
        classNamePrefix="confirm"
        routeId={_dbMeta?.routeId}
        content={_dbConfirmBanner}
      />
      <div className={styles.confirm}>
        <div className={styles.confirm__container}>
          {'TODO: <ConfirmPlayground />'}
        </div>
      </div>
    </Layout>
  );
}

export default Confirm;