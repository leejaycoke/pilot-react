/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Children from '../../library/utils/children';
import palette from '../../library/styles/palette';

function Container({ children }: Children) {
  return <main css={containerStyle}>{children}</main>;
}

const containerStyle = css`
  /* display: flex;
  width: 100%;
  height: 100vh;
  max-width: 400px;
  justify-content: center;
  align-items: center; */
`;

export default Container;
