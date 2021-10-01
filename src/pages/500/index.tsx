import { attributes as _500 } from '@database/pages/500.md';

import Layout from '@components/layout/Layout';
import BannerError from '@components/banners/error/BannerError';

import styles from '@pages/500/index.module.scss';

interface IError500 {
  statusCode?: number;
}

function Error500({ statusCode = 500 }: IError500): JSX.Element {
  const { _dbPageMeta, _dbErrorBanner } = _500;

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

export default Error500;
