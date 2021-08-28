import { IDatabaseMeta } from '@database/database.i';

import MetaTags from '@components/meta/MetaTags';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Schema from '@components/meta/Schema';

import NoScript from '@components/layout/partials/NoScript';

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
  meta?: IDatabaseMeta;
  children?: TChildren;
}

function Layout({ classNamePrefix, meta, children }: ILayout): JSX.Element {
  return (
    <>
      <MetaTags meta={meta} />
      <NoScript />
      <Header classNamePrefix={classNamePrefix} />
      <main className={`${styles.layout} ${styles[`layout--${classNamePrefix}`] || ''}`}>
        {children}
      </main>
      <Footer />
      <Schema />
    </>
  );
}

export default Layout;