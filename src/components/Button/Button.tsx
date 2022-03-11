import React, { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

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
