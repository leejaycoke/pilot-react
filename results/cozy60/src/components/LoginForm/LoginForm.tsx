/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';
import Children from '../../library/utils/children';

class LoginFormType extends Children {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;

  constructor(
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    children: React.ReactNode
  ) {
    super(children);
    this.onSubmit = onSubmit;
  }
}

function LoginForm({ onSubmit, children }: LoginFormType) {
  return (
    <form css={loginFormStyle} onSubmit={onSubmit}>
      <fieldset>{children}</fieldset>
    </form>
  );
}

const loginFormStyle = css`
  display: flex;
  justify-content: center;

  fieldset {
    border: none;
  }

  label {
    display: block;
    font: bold 15px/24px 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    margin: 14px 0 4px;
    color: ${palette.dark};
  }

  footer {
    margin-top: 20px;
    margin-bottom: 14px;
  }
`;

export default LoginForm;
