import ContentSearchArea from '@pages/documentation/partials/content-search-area/ContentSearchArea';
import ContentSearchBanner from '@pages/documentation/partials/content-search-banner/ContentSearchBanner';

import styles from '@pages/documentation/partials/content-search/ContentSearch.module.scss';

function ContentSearch(): JSX.Element {
  return (
    <div className={styles.search}>
      <ContentSearchArea />
      <ContentSearchBanner />
    </div>
  );
}

export default ContentSearch;
