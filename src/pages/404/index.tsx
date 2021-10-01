import Link from 'next/link';

import { attributes as _404 } from '@database/pages/404.md';

import { routes } from '@application/routes';
import { EPageId } from '@application/enumerations/page-id';

import Layout from '@components/layout/Layout';
import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/404/index.module.scss';

interface IError404 {
  statusCode?: number;
}

function Error404({ statusCode = 404 }: IError404): JSX.Element {
  const { _dbPageMeta, _db404Content } = _404;

  const linkPathPage = routes.find(x => x?.id === EPageId.HOME)?.pathPage || '/';
  const linkPathAs = routes.find(x => x?.id === EPageId.HOME)?.pathAs || '/';

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="error">
      <div className={styles.error}>
        <div className={styles.error__container}>
          <div className={styles.error__banner}>
            <LazyImage
              threshold={0.25}
              className={styles.error__banner__image}
              classNameLoaded={styles['error__banner__image--loaded']}
              width={_db404Content?.bannerImageWidth}
              height={_db404Content?.bannerImageHeight}
              src={`${process.env.appUrl}${_db404Content?.bannerImageSrc}`}
              alt={_db404Content?.title}
            />
          </div>
          <div className={styles.error__content}>
            <h1 className={styles.error__content__title}>{statusCode}</h1>
            <h2 className={styles.error__content__subtitle}>{_db404Content?.title}</h2>
            <Link href={linkPathPage} as={`${process.env.appUrl}${linkPathAs}`} passHref prefetch={false}>
              <a className={styles.error__content__link}>
                <span>{_db404Content?.buttonText}</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Error404;
