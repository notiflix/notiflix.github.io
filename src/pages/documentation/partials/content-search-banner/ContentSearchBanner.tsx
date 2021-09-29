import { attributes as _documentation } from '@database/pages/documentation.md';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/documentation/partials/content-search-banner/ContentSearchBanner.module.scss';

function ContentSearchBanner(): JSX.Element {
  const { _dbDocsSearch } = _documentation;

  return (
    <div className={styles.banner}>
      <LazyImage
        threshold={0.25}
        className={styles.banner__image}
        classNameLoaded={styles['banner__image--loaded']}
        width="500"
        height="500"
        src={`${process.env.appUrl}${_dbDocsSearch?.bannerImageSrc}`}
        alt={_dbDocsSearch?.bannerImageAlt}
      />
    </div>
  );
}

export default ContentSearchBanner;
