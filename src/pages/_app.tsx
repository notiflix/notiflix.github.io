import React from 'react';
import { AppProps } from 'next/app';

import '@styles/styles.global.scss';

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default App;
