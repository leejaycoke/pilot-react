import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";

const Form = ({ children, ...rest }: FormHTMLAttributes<HTMLFormElement>) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

// style
const StyledForm = styled.form`
  padding: 40px 0;
`;

export default Form;
