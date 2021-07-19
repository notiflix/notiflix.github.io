import Link from 'next/link';
import { withRouter } from 'next/router';
import { Marked } from '@ts-stack/markdown';

import { attributes as _about } from '@database/pages/about.md';

import Layout from '@components/layout/Layout';

import styles from '@pages/about/about.module.scss';

// TODO:
function About(): JSX.Element {
  const { _dbMeta, _dbContent } = _about;

  console.log(_dbMeta);
  console.log(_dbContent);

  const fetchTags = async () => {
    try {

      const response = await window.fetch('https://api.github.com/repos/notiflix/Notiflix/releases', {
        method: 'get',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (response.ok) {

        const apiResponse = await response.json();

        console.log(apiResponse);
        console.log(apiResponse[0].body);

        const body = Marked.parse(apiResponse[0].body);
        console.log(body);


      } else {
        throw new Error('TEST');
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout meta={_dbMeta} classNamePrefix="about">

      <div className={styles.temp}>
        <h1 className={`${styles.temp__title} ${styles['state--active']}`}>ABOUT</h1>
      </div>

      <Link href={'/'} as={`${process.env.publicUrl}${'/'}`} passHref>
        <a>Go to Home</a>
      </Link>

      <br />
      <br />
      <br />
      <button type="button" onClick={fetchTags}>
        <span>GET TAGS</span>
      </button>
      <br />
      <br />
      <br />
      <img src={process.env.publicUrl + '/content/images/nature.jpeg'} alt="NATURE" />
    </Layout>
  );
}

export default withRouter(About);
