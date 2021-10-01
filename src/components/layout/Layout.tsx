import { useEffect } from 'react';

import { IDatabasePageMeta } from '@database/database.i';

import MetaTags from '@components/meta/MetaTags';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Schema from '@components/meta/Schema';

import Noscript from '@components/layout/partials/noscript/Noscript';
import GoToTop from '@components/layout/partials/go-to-top/GoToTop';

import styles from '@components/layout/Layout.module.scss';

type TChildren = React.ReactNode
  | JSX.Element
  | JSX.Element[]
  | string
  | string[]
  | React.ReactChild
  | React.ReactChild[];

interface ILayout {
  classNamePrefix: string;
  meta?: IDatabasePageMeta;
  children?: TChildren;
}

function Layout({ classNamePrefix, meta, children }: ILayout): JSX.Element {

  useEffect(() => {
    window.document.documentElement?.dispatchEvent(new Event('scroll', { bubbles: true }));
  }, []);

  return (
    <>
      <MetaTags meta={meta} />
      <Noscript />
      <Header classNamePrefix={classNamePrefix} />
      <main className={[
        `${styles.layout}`,
        `${styles[`layout--${classNamePrefix}`] || ''}`,
      ].join(' ').trim()}>
        {children}
      </main>
      <Footer />
      <GoToTop />
      <Schema />
    </>
  );
}

export default Layout;
