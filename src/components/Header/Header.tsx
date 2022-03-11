import React from 'react';
import { Logo } from '../Logo';
import Button from '../Button/Button';
import { Wrapper } from './Header.styled';

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
