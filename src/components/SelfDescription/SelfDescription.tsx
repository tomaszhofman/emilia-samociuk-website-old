import React from 'react';
import { Container } from '../../styles/shared';
import { Bar } from '../Bar';
import { StyledSection, Text } from './SelfDescription.styled';

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
