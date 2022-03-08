import React from 'react';
import styled from 'styled-components';
import { Container, spaceBetween } from '../../styles/shared';

const MainContent = styled.div`
  font-size: 20rem;
  font-family: 'Bigilla';
  font-weight: 700;
  color: var(--color-text-secondary);

  span {
    display: block;
    padding: 0;
    margin: 0;
    line-height: 1;
  }
`;

const StyledSection = styled.section`
  min-height: 100%;
  padding: 20rem 0 9.8rem 0;
`;

const ShortDescription = styled.div`
  max-width: 30rem;

  p {
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--color-text-primary);
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  ${spaceBetween}
`;

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
