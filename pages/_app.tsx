import { MainMenu } from '../components/main-menu/main-menu';
import { ReactElement } from 'react';
import { ReactQueryClientProvider as QueryClientProvider } from '../providers/query-client-provider';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <QueryClientProvider>
      <MainMenu />
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
};

export default MyApp;
