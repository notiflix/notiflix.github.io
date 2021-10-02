import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

import { devLoggerInfo } from '@application/helpers/utilities';

import '@styles/styles.global.scss';

function App({ Component, pageProps }: AppProps): React.ReactNode {
  useEffect(() => {
    if ('serviceWorker' in window.navigator && !process.env.isDev) {
      window.navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(() => {
        devLoggerInfo('serviceWorker has been registered.');
      });
    }
  }, []);
  return <Component {...pageProps} />;
}

export default App;
