import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";

// custom
import { PALETTE } from "style";

const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

// style
const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${PALETTE.GRAY};
  border-radius: 4px;
  color: ${darken(0.2, PALETTE.GRAY)};
  font-size: 14px;
  background-color: transparent;
  transition: 0.2s;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
  &:hover {
    border-color: ${PALETTE.MAIN};
    color: ${darken(0.1, PALETTE.MAIN)};
    transform: perspective(1000px) translateZ(-5px);
  }
  &:active {
    border-color: ${darken(0.08, PALETTE.MAIN)};
    background-color: ${lighten(0.185, PALETTE.MAIN)};
    transform: perspective(1000px) translateZ(-15px);
  }
`;

export default Button;
