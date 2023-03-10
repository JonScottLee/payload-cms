import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { MainMenu } from '../components/main-menu/main-menu';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <>
      <MainMenu />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
