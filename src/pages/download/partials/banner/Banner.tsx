import { attributes as _download } from '@database/pages/download.md';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/download/partials/banner/Banner.module.scss';

function Banner(): JSX.Element {
  const { _dbDownloadBanner } = _download;

  return (
    <div className={styles.banner}>
      <LazyImage
        threshold={0.25}
        className={styles.banner__image}
        classNameLoaded={styles['banner__image--loaded']}
        width="500"
        height="500"
        src={`${process.env.appUrl}${_dbDownloadBanner?.image}`}
        alt={_dbDownloadBanner?.alt}
      />
    </div>
  );
}

export default Banner;
