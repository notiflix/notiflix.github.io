import Link from 'next/link';

import { attributes as _home } from '@database/pages/home.md';

import Layout from '@components/layout/Layout';

import HomeSlider from '@pages/home/partials/HomeSlider';

// TODO:
function Home(): JSX.Element {
  const { _dbMeta } = _home;

  return (
    <Layout meta={_dbMeta} classNamePrefix="home">
      <HomeSlider />


      {/* TODO: TEMP, will be deleted */}
      <Link href={'/about'} as={`${process.env.appUrl}${'/about'}`} passHref>
        <a>Go to ABOUT</a>
      </Link>
    </Layout>
  );
}

export default Home;
