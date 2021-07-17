/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';
import Children from '../../library/utils/children';

function Card({ children }: Children) {
  return (
    <div css={sectionStyle}>
      <section css={borderStyle}>{children}</section>
    </div>
  );
}

const sectionStyle = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const borderStyle = css`
  padding: 30px 40px;
  background-color: ${palette.white};
  border: 2px solid ${palette.border};
  border-radius: 9px;
`;

export default Card;
