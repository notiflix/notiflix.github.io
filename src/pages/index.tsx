import Link from 'next/link';

import { attributes as _home } from '@database/pages/home.md';

import Layout from '@components/layout/Layout';

// TODO:
export default function Index(): JSX.Element {
  const { _dbMeta } = _home;

  return (
    <Layout meta={_dbMeta}>

      <h1>HOME</h1>

      <Link href={'/about'} as={`${process.env.publicUrl}${'/about'}`} passHref>
        <a>Go to ABOUT</a>
      </Link>

    </Layout>
  );
}
