import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/layout/Layout';

// TODO:
export default function Index(): JSX.Element {
  return (
    <Layout>
      <Head>
        <meta name="content-language" content="en" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="robots" content="noindex, nofollow, noodp, noydir" />
        <meta name="googlebot" content="noindex, nofollow, noodp, noydir" />
        <title>HOME</title>
        <meta name="description" content="HOME Description" />
        <link rel="shortcut icon" href={`${process.env.publicUrl}${'/favicon.png'}`} />
      </Head>
      <h1>HOME</h1>

      <Link href={'/about'} as={`${process.env.publicUrl}${'/about'}`} passHref>
        <a>Go to ABOUT</a>
      </Link>
    </Layout>
  );
}
