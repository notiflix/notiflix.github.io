import { attributes as _download } from '@database/pages/download.md';

import Layout from '@components/layout/Layout';

import Table from '@pages/download/partials/table/Table';
import Banner from '@pages/download/partials/banner/Banner';

import styles from '@pages/download/index.module.scss';

function Download(): JSX.Element {
  const { _dbPageMeta } = _download;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="download">
      <div className={styles.download}>
        <div className={styles.download__container}>
          <Table />
          <Banner />
        </div>
      </div>
    </Layout>
  );
}

export default Download;
