/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

class UsreInfoType {
  dt: string;
  dd: string;

  constructor(dt: string, dd: string) {
    this.dt = dt;
    this.dd = dd;
  }
}

function UserInfo({ dt, dd }: UsreInfoType) {
  return (
    <dl css={userInfoStyle}>
      <dt>{dt}</dt>
      <dd>{dd}</dd>
    </dl>
  );
}

const userInfoStyle = css`
  & {
    font-family: 'Noto Sans KR', sans-serif;
  }

  dt,
  dd {
    display: inline-block;
  }

  dt {
    margin-right: 16px;
    font-weight: 700;
  }

  dd {
    margin: 0;
  }
`;

export default UserInfo;
