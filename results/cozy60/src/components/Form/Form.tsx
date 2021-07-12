/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../library/styles/palette';
import Children from '../../library/utils/children';

class FormType extends Children {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;

  constructor(
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    children: React.ReactNode
  ) {
    super(children);
    this.onSubmit = onSubmit;
  }
}

function Form({ onSubmit, children }: FormType) {
  return (
    <form css={formStyle} onSubmit={onSubmit}>
      <fieldset>{children}</fieldset>
    </form>
  );
}

const formStyle = css`
  display: flex;
  justify-content: center;

  fieldset {
    width: 100%;
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

export default Form;
