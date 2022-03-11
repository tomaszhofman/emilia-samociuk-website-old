import * as React from 'react';
import { Hero } from '../components/Hero';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Header } from '../components/Header';
import { SelfDescription } from '../components/SelfDescription';
import { ImageShowcase } from '../components/ImageShowcase';
import { ContactMe } from '../components/ContactMe';
import { Footer } from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <SelfDescription />
      <ImageShowcase />
      <ContactMe />
      <Footer />
    </>
  );
};

export default IndexPage;
