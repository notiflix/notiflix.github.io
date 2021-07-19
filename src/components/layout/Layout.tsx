import { IDatabaseMeta } from '@database/database.i';

import MetaTags from '@components/meta/MetaTags';
import Header from '@components/header/Header';
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
  meta: IDatabaseMeta;
  classNamePrefix: string;
  children?: TChildren;
}

function Layout({ meta, classNamePrefix, children }: ILayout): JSX.Element {
  return (
    <>
      <MetaTags meta={meta} />
      <NoScript />
      <Header classNamePrefix={classNamePrefix} />
      <main className={`${styles.layout} ${styles[`layout--${classNamePrefix}`] || ''}`}>
        {children}
      </main>
      {/* TODO: Footer */}
      <Schema />
    </>
  );
}

export default Layout;
