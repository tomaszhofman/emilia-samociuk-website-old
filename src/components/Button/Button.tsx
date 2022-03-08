import React, { KeyboardEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button`
  background-color: transparent;
  box-shadow: none;
  border: none;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Montserrat';
  cursor: pointer;
  color: var(--color-text-primary);
`;

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    } else if (event.key === 'Enter') {
      onClick && onClick();
    }
  };
  return (
    <StyledButton onClick={onClick} onKeyDown={onKeyDown} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
