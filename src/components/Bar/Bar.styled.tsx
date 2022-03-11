import styled from 'styled-components';

interface StyledBarProps {
  readonly height: number;
}

export const StyledBar = styled.div<StyledBarProps>`
  width: ${({ height }) => `${height}%`};
  height: 1px;
  background-color: black;
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: transparent;
`;
