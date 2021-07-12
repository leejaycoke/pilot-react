import React, {InputHTMLAttributes} from 'react';
import styled from "styled-components";
import {PALETTE} from "style";
import {darken, lighten} from "polished";

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
  color: ${lighten(.2, PALETTE.BLACK)};
  font-size: 16px;
  transition: .2s;
  
  &:not(:first-of-type){
    margin-top: 12px;
  }
  &:last-of-type{
    margin-bottom: 40px;
  }
  &::placeholder{
    color: ${PALETTE.GRAY};
  }
  &:focus{
    border-color: ${PALETTE.MAIN};
    color:${darken(.2, PALETTE.MAIN)}
  }
`

export default Input;
