import React from 'react';
import styled from 'styled-components';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

function FormInput({ id, label, ...rest }: FormInputProps) {
  return (
    <>
      <label htmlFor={id} className="a11yHidden">
        {label}
      </label>
      <StyledInput id={id} {...rest} />
    </>
  );
}

const StyledInput = styled.input`
  display: block;
  min-width: 100%;
  max-width: 100%;
  width: 300px;
  padding: 11px 46px 11px 16px;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.lightGray};
  outline: 0;
  transition: all 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
  &:focus {
    border-color: ${({ theme }) => theme.color.main};
  }
`;

export default FormInput;
