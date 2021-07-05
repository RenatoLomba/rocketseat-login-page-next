import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
