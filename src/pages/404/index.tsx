import { attributes as _404 } from '@database/pages/404.md';

import Layout from '@components/layout/Layout';
import BannerError from '@components/banners/error/BannerError';

import styles from '@pages/404/index.module.scss';

interface IError404 {
  statusCode?: number;
}

function Error404({ statusCode = 404 }: IError404): JSX.Element {
  const { _dbPageMeta, _dbErrorBanner } = _404;

  return (
    <Layout meta={_dbPageMeta} classNamePrefix="error">
      <div className={styles.error}>
        <div className={styles.error__container}>
          <BannerError statusCode={statusCode} data={_dbErrorBanner} />
        </div>
      </div>
    </Layout>
  );
}

export default Error404;
