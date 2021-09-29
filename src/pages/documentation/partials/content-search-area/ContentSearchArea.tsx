import { attributes as _documentation } from '@database/pages/documentation.md';

import styles from '@pages/documentation/partials/content-search-area/ContentSearchArea.module.scss';

function ContentSearchArea(): JSX.Element {
  const { _dbDocsSearch } = _documentation;

  return (
    <div className={styles.area}>
      <h1>TODO: {_dbDocsSearch?.inputPlaceholder}</h1>
    </div>
  );
}

export default ContentSearchArea;
