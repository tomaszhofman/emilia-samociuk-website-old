import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface StyledBarProps {
  readonly height: number;
}

const StyledBar = styled.div<StyledBarProps>`
  width: ${({ height }) => `${height}%`};
  height: 1px;
  background-color: black;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: transparent;
`;

const Bar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const initializeScrollBar = () => {
    const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;
    const activeHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (distanceFromPageTop / activeHeight) * 100;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    document.addEventListener('scroll', initializeScrollBar);

    return () => {
      document.removeEventListener('scroll', initializeScrollBar);
    };
  }, []);

  return (
    <BarContainer>
      <StyledBar height={scrollPosition} />
    </BarContainer>
  );
};

export { Bar };
