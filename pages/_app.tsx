import { MainMenu } from '../components/main-menu/main-menu';
import { ReactQueryClientProvider as QueryClientProvider } from '../providers/query-client-provider';
import { useMainMenuQuery } from '../hooks/use-main-menu-query';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import type { AppProps } from 'next/app';

const Foo = styled.div`
  background: red;
`;
const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <QueryClientProvider>
      <MainMenu />
      <Foo>Foo</Foo>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
};

export default MyApp;
