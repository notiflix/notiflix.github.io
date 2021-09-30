import { attributes as _report } from '@database/pages/report.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

import Playground from '@pages/report/partials/playground/Playground';

import styles from '@pages/report/index.module.scss';

function Report(): JSX.Element {
  const { _dbPageMeta, _dbReportBanner } = _report;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="report">
      <BannerProduct
        classNamePrefix="report"
        routeId={_dbPageMeta?.routeId}
        content={_dbReportBanner}
      />
      <div className={styles.report}>
        <div className={styles.report__container}>
          <Playground />
        </div>
      </div>
    </Layout>
  );
}

export default Report;
