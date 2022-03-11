import React from 'react';
import { Container } from '../../styles/shared';
import { Bar } from '../Bar';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 8rem 0 9.8rem 0;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 6rem;
  width: 100%;
  padding-top: 6.5rem;
  color: var(--color-text-primary);
`;

const SelfDescription = () => {
  return (
    <StyledSection>
      <Container>
        <Bar />
        <Text>
          Z wykształcenia Product & Brand Managerka. Branża nieruchomości od razu okazała się
          zawodowym strzałem w dziesiątkę
        </Text>
      </Container>
    </StyledSection>
  );
};

export { SelfDescription };
