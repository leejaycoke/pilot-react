/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';
import Children from '../../library/utils/children';

export class ButtonType extends Children {
  type: 'button' | 'submit' | 'reset';
  color: 'blue' | 'red';

  constructor(
    type: 'button' | 'submit' | 'reset',
    color: 'blue' | 'red',
    children: React.ReactNode
  ) {
    super(children);
    this.type = type;
    this.color = color;
  }
}

function Button({ type, color, children }: ButtonType) {
  return (
    <button type={type} css={buttonStyle(color)}>
      {children}
    </button>
  );
}

const buttonStyle = (color: 'blue' | 'red') => css`
  display: block;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: ${palette.white};
  background-color: ${palette[color]};

  :focus {
    outline: none;
  }

  :active {
    opacity: 0.7;
  }
`;

export default Button;
