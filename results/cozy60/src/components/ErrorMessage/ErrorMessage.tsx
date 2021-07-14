/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';
import Children from '../../library/utils/children';

function ErrorMessage({ children }: Children) {
  return <p css={errorMessageStyle}>{children}</p>;
}

const errorMessageStyle = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  text-align: center;
  color: ${palette.red};
`;

export default ErrorMessage;
