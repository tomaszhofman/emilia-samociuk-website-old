import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BarContainer, StyledBar } from './Bar.styled';

const Bar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const initializeScrollBar = useCallback(() => {
    const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;
    const activeHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (distanceFromPageTop / activeHeight) * 100;
    setScrollPosition(scrolled);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', initializeScrollBar);

    return () => {
      document.removeEventListener('scroll', initializeScrollBar);
    };
  }, [initializeScrollBar]);

  return (
    <BarContainer>
      <StyledBar height={scrollPosition} />
    </BarContainer>
  );
};

export { Bar };
