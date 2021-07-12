import { ButtonHTMLAttributes } from 'react';

import StyledButton from './Button.styles';

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
