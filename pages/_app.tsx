import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { MainMenu } from '../components/main-menu/main-menu';
import styled from 'styled-components';

const Foo = styled.div`
  background: red;
`;
const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <MainMenu />
      <Foo>Foo</Foo>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
