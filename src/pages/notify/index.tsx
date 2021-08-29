import { attributes as _notify } from '@database/pages/notify.md';

import { routes } from '@application/routes';

import Layout from '@components/layout/Layout';
import Banner from '@components/banner/Banner';

import styles from '@pages/notify/index.module.scss';

function Notify(): JSX.Element {
  const { _dbMeta, _dbNotifyBanner } = _notify;

  const IconComponent = routes.find(route => route.id === _dbMeta?.routeId)?.IconComponent;

  return (
    <Layout meta={_dbMeta} classNamePrefix="notify">
      <Banner
        classNamePrefix="notify"
        content={_dbNotifyBanner}
        IconComponent={IconComponent}
      />
      <div className={styles.notify}>
        <div className={styles.notify__container}>
          <h1>TODO: Page Content</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Notify;
