import { attributes as _download } from '@database/pages/download.md';

import Layout from '@components/layout/Layout';

import DownloadTable from '@pages/download/partials/download-table/DownloadTable';
import DownloadBanner from '@pages/download/partials/download-banner/DownloadBanner';

import styles from '@pages/download/index.module.scss';

function Download(): JSX.Element {
  const { _dbPageMeta } = _download;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="download">
      <div className={styles.download}>
        <div className={styles.download__container}>
          <DownloadTable />
          <DownloadBanner />
        </div>
      </div>
    </Layout>
  );
}

export default Download;
