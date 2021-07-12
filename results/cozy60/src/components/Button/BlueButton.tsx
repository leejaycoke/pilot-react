/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';
import Children from '../../library/utils/children';

class BlueButtonType extends Children {
  type: string;

  constructor(type: string, children: React.ReactNode) {
    super(children);
    this.type = type;
  }
}

function BlueButton({ type, children }: BlueButtonType) {
  return <button css={blueButtonStyle}>{children}</button>;
}

const blueButtonStyle = css`
  display: block;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: ${palette.white};
  background-color: ${palette.blue};
`;

export default BlueButton;
