import * as React from 'react';
import { Hero } from '../components/Hero';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Header } from '../components/Header';
import { SelfDescription } from '../components/SelfDescription';
import { ImageShowcase } from '../components/ImageShowcase';

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <SelfDescription />
      <ImageShowcase />
    </>
  );
};

export default IndexPage;
