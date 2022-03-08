import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Bigilla';
  font-size: 4rem;
  line-height: 1.9rem;
`;

const Logo = () => {
  return (
    <Wrapper>
      <span>ES</span>
    </Wrapper>
  );
};

export { Logo };
