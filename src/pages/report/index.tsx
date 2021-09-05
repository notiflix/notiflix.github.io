import { attributes as _report } from '@database/pages/report.md';

import Layout from '@components/layout/Layout';
import BannerProduct from '@components/banners/product/BannerProduct';

// import ReportPlayground from '@pages/report/partials/report-playground/ReportPlayground';

import styles from '@pages/report/index.module.scss';

function Report(): JSX.Element {
  const { _dbMeta, _dbReportBanner } = _report;

  return (
    <Layout meta={_dbMeta} classNamePrefix="report">
      <BannerProduct
        classNamePrefix="report"
        routeId={_dbMeta?.routeId}
        content={_dbReportBanner}
      />
      <div className={styles.report}>
        <div className={styles.report__container}>
          {'TODO: <ReportPlayground />'}
        </div>
      </div>
    </Layout>
  );
}

export default Report;
