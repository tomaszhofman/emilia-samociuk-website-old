import styled from 'styled-components';
import { Container, flex } from '../../styles/shared';

export const StyledContainer = styled(Container)`
  align-items: flex-start;

  ${flex}

  div {
    flex: 1;
  }
`;

export const Section = styled.section`
  padding: 0 0 10rem 0;
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
  padding-top: 15rem;
  height: 100%;
  width: 100%;
`;
export const ListItem = styled.li`
  position: relative;
  padding: 4rem;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    top: -0.5rem;
    background-color: var(--color-text-primary);
    position: absolute;
  }
`;
export const Link = styled.a`
  font-size: 4rem;
  font-family: Montserrat;
  text-decoration: none;
  color: var(--color-text-primary);
`;
