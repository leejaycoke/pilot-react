import React from 'react';
import styled from 'styled-components';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

export default Main;
