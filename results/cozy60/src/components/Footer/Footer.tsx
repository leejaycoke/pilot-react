/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Children from '../../library/utils/children'; 

function Footer({ children }: Children) {
  return <footer css={footerStyle}>{children}</footer>;
}

const footerStyle = css`
  margin-top: 20px;
  margin-bottom: 14px;
`;

export default Footer;
