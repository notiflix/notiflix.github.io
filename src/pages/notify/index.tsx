import { attributes as _notify } from '@database/pages/notify.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

import NotifyPlayground from '@pages/notify/partials/notify-playground/NotifyPlayground';

import styles from '@pages/notify/index.module.scss';

function Notify(): JSX.Element {
  const { _dbMeta, _dbNotifyBanner } = _notify;

  return (
    <Layout meta={_dbMeta} classNamePrefix="notify">
      <BannerProduct
        classNamePrefix="notify"
        routeId={_dbMeta?.routeId}
        content={_dbNotifyBanner}
      />
      <div className={styles.notify}>
        <div className={styles.notify__container}>
          <NotifyPlayground />
        </div>
      </div>
    </Layout>
  );
}

export default Notify;
