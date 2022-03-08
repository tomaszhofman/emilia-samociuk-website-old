import React from 'react';
import styled from 'styled-components';
import { flex, spaceBetween } from '../../styles/shared';
import { Logo } from '../Logo';
import Button from '../Button/Button';

const Wrapper = styled.header`
  ${flex};
  ${spaceBetween};
  padding: 3.2rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <nav>
        <Button>Info</Button>
      </nav>
    </Wrapper>
  );
};

export { Header };
