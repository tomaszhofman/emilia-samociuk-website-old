import React from 'react';
import { Author, CopyRights, Wrapper } from './Footer.styled';

const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" fill="none" viewBox="0 0 34 37">
    <path
      fill="#181717"
      d="M14.422 36.148h4.801V8.973l11.098 10.39 3.287-3.112L16.822.537 0 16.251l3.36 3.111L14.423 8.973v27.175z"
    />
  </svg>
);

const Footer = () => {
  return (
    <Wrapper>
      <span>
        <ArrowUp />
      </span>
      <CopyRights>
        <p>
          Emila Samociuk <span>&copy;</span> 2022
        </p>
      </CopyRights>
      <Author>
        <p>Crafted by Tomasz Hofman</p>
      </Author>
    </Wrapper>
  );
};

export { Footer };
