import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

// custom
import { PALETTE } from "style";

interface PageProps {
  children?: React.ReactNode;
  title?: string;
}
const PageTemplate = ({ children, title }: PageProps) => {
  return (
    <StyledMain>
      <div className="container">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </StyledMain>
  );
};

// style
const StyledMain = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .container {
    width: 520px;
    margin-top: 4vw;
    padding: 32px 24px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }
  & .title {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 500;
    color: ${lighten(0.2, PALETTE.BLACK)};
  }
  & .userInfo {
    margin-bottom: 20px;
    font-size: 20px;
    color: ${darken(0.2, PALETTE.MAIN)};
  }
`;

export default PageTemplate;
