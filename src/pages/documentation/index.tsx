import { attributes as _documentation } from '@database/pages/documentation.md';

import Layout from '@components/layout/Layout';

import DocumentationSidebar from '@pages/documentation/partials/documentation-sidebar/DocumentationSidebar';
import DocumentationContent from '@pages/documentation/partials/documentation-content/DocumentationContent';

import styles from '@pages/documentation/index.module.scss';

function Documentation(): JSX.Element {
  const { _dbMeta } = _documentation;

  return (
    <Layout meta={_dbMeta} classNamePrefix="documentation">
      <div className={styles.documentation}>
        <div className={styles.documentation__container}>
          <DocumentationSidebar />
          <DocumentationContent />
        </div>
      </div>
    </Layout>
  );
}

export default Documentation;
