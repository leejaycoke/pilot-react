import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";
// custom
import { PALETTE } from "style";

const Form = ({ children, ...rest }: FormHTMLAttributes<HTMLFormElement>) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

// style
const StyledForm = styled.form`
  padding: 40px 0;
  & .errorMessage {
    height: 14px;
    margin-bottom: 60px;
    text-indent: 8px;
    font-size: 14px;
    color: ${PALETTE.RED};
  }
`;

export default Form;
