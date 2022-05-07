import { useEffect, useState } from 'react';

import { IDatabasePageMeta } from '@database/database.i';

import { browserIsInternetExplorer, classNames } from '@application/helpers/utilities';

import MetaTags from '@components/meta/MetaTags';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Schema from '@components/meta/Schema';

import InternetExplorer from '@components/layout/partials/internet-explorer/InternetExplorer';
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

  const [stateIsInternetExplorer, setStateIsInternetExplorer] = useState<boolean>(false);

  useEffect(() => {
    if (browserIsInternetExplorer()) {
      setStateIsInternetExplorer(true);
    } else {
      window.document?.documentElement?.dispatchEvent(new Event('scroll', { bubbles: true }));
    }
  }, []);

  return (
    <>
      <MetaTags meta={meta} />
      {stateIsInternetExplorer && <InternetExplorer />}
      <Noscript />
      <Header classNamePrefix={classNamePrefix} />
      <main className={classNames(styles.root, styles[classNamePrefix])}>
        {children}
      </main>
      <Footer />
      <GoToTop />
      <Schema />
    </>
  );
}

export default Layout;
