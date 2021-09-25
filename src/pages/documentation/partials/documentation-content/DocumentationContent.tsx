import DocumentationContentSearch from '@pages/documentation/partials/documentation-content-search/DocumentationContentSearch';
import DocumentationContentTable from '@pages/documentation/partials/documentation-content-table/DocumentationContentTable';

import styles from '@pages/documentation/partials/documentation-content/DocumentationContent.module.scss';

function DocumentationContent(): JSX.Element {
  return (
    <div className={styles.content}>
      <DocumentationContentSearch />
      <DocumentationContentTable />
    </div>
  );
}

export default DocumentationContent;
