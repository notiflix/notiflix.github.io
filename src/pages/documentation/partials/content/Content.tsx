import ContentSearch from '@pages/documentation/partials/content-search/ContentSearch';
import ContentSection from '@pages/documentation/partials/content-section/ContentSection';

import styles from '@pages/documentation/partials/content/Content.module.scss';

function Content(): JSX.Element {
  return (
    <div className={styles.content}>
      <ContentSearch />
      <ContentSection />
    </div>
  );
}

export default Content;
