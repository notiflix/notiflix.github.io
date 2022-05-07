import Link from 'next/link';

import { IDatabaseErrorBanner } from '@database/database.i';

import { routes } from '@application/routes';
import { EPageId } from '@application/enumerations/page-id';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@components/banners/error/BannerError.module.scss';

interface IBannerError {
  statusCode: number;
  data?: IDatabaseErrorBanner;
}

function BannerError({ statusCode, data }: IBannerError): JSX.Element {
  const linkPathPage = routes.find(x => x?.id === EPageId.HOME)?.pathPage || '/';
  const linkPathAs = routes.find(x => x?.id === EPageId.HOME)?.pathAs || '/';

  return (
    <div className={styles.root}>
      <div className={styles.media}>
        <LazyImage
          threshold={0.25}
          className={styles.image}
          classNameLoaded={styles.imageLoaded}
          width={data?.bannerImageWidth}
          height={data?.bannerImageHeight}
          src={`${process.env.appUrl}${data?.bannerImageSrc}`}
          alt={data?.title}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{statusCode}</h1>
        <h2 className={styles.subtitle}>{data?.title}</h2>
        <Link href={linkPathPage} as={`${process.env.appUrl}${linkPathAs}`} passHref prefetch={false}>
          <a className={styles.link}>
            <span>{data?.linkText}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerError;
