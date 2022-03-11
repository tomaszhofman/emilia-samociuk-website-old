import styled from 'styled-components';
import { Container, flex } from '../../styles/shared';
import * as mq from '../../styles/media-queries';

export const Section = styled.section`
  padding: 0 0 10rem 0;
`;

export const StyledContainer = styled(Container)`
  align-items: flex-start;
  ${flex};

  div {
    flex: 1;

    ${[mq.large]} {
      flex: unset;
      width: 100%;
    }
  }

  ${[mq.large]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 8rem;
  font-family: Bigilla;
  font-weight: bold;
  color: var(--color-text-primary);
  align-self: flex-start;
`;

export const List = styled.ul`
  list-style: none;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 15rem 0 0 0;

  ${[mq.large]} {
    padding: 10rem 0 0 0;
  }
`;
export const ListItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1.5rem 0 1rem 0;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    top: 1.2rem;
    background-color: var(--color-text-primary);
    position: absolute;
  }
`;
export const Link = styled.a`
  font-size: clamp(2.5rem, 1vw, 6rem);
  font-family: Montserrat;
  text-decoration: none;
  color: var(--color-text-primary);
`;
