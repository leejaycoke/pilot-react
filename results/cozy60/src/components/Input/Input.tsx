/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';

class InputProps {
  type: string;
  name: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  constructor(
    type: string,
    name: string,
    id: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
  ) {
    this.type = type;
    this.name = name;
    this.id = id;
    this.onChange = onChange;
  }
}

function Input({ type, name, id, onChange }: InputProps) {
  return (
    <input
      css={inputStyle}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
    />
  );
}

const inputStyle = css`
  width: 300px;
  height: 36px;
  background-color: ${palette.input};
  font-size: 14px;
  padding: 10px 16px;
  border: 1px solid ${palette.border};
  border-radius: 8px;

  :focus {
    outline: none;
  }
`;

export default Input;
