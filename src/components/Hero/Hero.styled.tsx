import styled from 'styled-components';
import { Container, spaceBetween } from '../../styles/shared';
import * as mq from '../../styles/media-queries';

export const MainContent = styled.h1`
  font-size: clamp(1.5rem, 15rem, 16rem);
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

export const StyledSection = styled.section`
  min-height: 100%;
  padding: 9.6rem 0 4.8rem 0;
`;

export const ShortDescription = styled.div`
  max-width: 30rem;

  p {
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--color-text-primary);
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  ${spaceBetween};

  ${[mq.large]} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;
