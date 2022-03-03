import * as React from 'react';
import { Hero } from '../components';
import { GlobalStyle } from '../styles/GlobalStyle';

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
    </>
  );
};

export default IndexPage;
