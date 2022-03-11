import React from 'react';
import { MainContent, ShortDescription, StyledContainer, StyledSection } from './Hero.styled';

const Hero = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <MainContent>
          <span>Emilia</span>
          <span>Samociuk</span>
        </MainContent>
        <ShortDescription>
          <p>
            I design, prototype and sometimes build digital products. I value simplicity and
            usability.
          </p>
        </ShortDescription>
      </StyledContainer>
    </StyledSection>
  );
};

export { Hero };
