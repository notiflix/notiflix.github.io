import { attributes as _documentation } from '@database/pages/documentation.md';

import Layout from '@components/layout/Layout';

import Sidebar from '@pages/documentation/partials/sidebar/Sidebar';
import Content from '@pages/documentation/partials/content/Content';

import styles from '@pages/documentation/index.module.scss';

function Documentation(): JSX.Element {
  const { _dbPageMeta } = _documentation;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="documentation">
      <div className={styles.documentation}>
        <div className={styles.documentation__container}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </Layout>
  );
}

export default Documentation;
