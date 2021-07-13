import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { PALETTE } from "style";
import { darken, lighten } from "polished";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

// style
const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${PALETTE.GRAY};
  color: ${lighten(0.2, PALETTE.BLACK)};
  font-size: 16px;
  transition: 0.2s;

  &:not(:first-of-type) {
    margin-top: 16px;
  }
  &:last-of-type {
    margin-bottom: 60px;
  }
  &::placeholder {
    color: ${PALETTE.GRAY};
    transition: 0.3s;
  }
  &:focus {
    border-color: ${PALETTE.MAIN};
    color: ${darken(0.2, PALETTE.MAIN)};
    &::placeholder {
      color: transparent;
    }
  }
`;

export default Input;
