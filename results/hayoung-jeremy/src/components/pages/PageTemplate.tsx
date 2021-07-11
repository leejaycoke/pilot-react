import React from "react";
import styled from "styled-components";

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
    padding-bottom: 20px;
    font-size: 28px;
    font-weight: 500;
    color: #999;
    border-bottom: 1px solid #e5e5e5;
  }
`;

export default PageTemplate;
