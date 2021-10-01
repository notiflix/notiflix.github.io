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
    <div className={styles.bannererror}>
      <div className={styles.bannererror__media}>
        <LazyImage
          threshold={0.25}
          className={styles.bannererror__media__image}
          classNameLoaded={styles['bannererror__media__image--loaded']}
          width={data?.bannerImageWidth}
          height={data?.bannerImageHeight}
          src={`${process.env.appUrl}${data?.bannerImageSrc}`}
          alt={data?.title}
        />
      </div>
      <div className={styles.bannererror__content}>
        <h1 className={styles.bannererror__content__title}>{statusCode}</h1>
        <h2 className={styles.bannererror__content__subtitle}>{data?.title}</h2>
        <Link href={linkPathPage} as={`${process.env.appUrl}${linkPathAs}`} passHref prefetch={false}>
          <a className={styles.bannererror__content__link}>
            <span>{data?.buttonText}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerError;
