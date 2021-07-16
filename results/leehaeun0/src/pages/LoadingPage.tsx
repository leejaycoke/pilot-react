import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

import Main from '../components/Main';

const LoadingPage: React.FC = () => {
  return (
    <Main>
      <StyledWrapper>
        <CircularProgress size={46} thickness={4.3} />
      </StyledWrapper>
    </Main>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  svg circle {
    color: ${({ theme }) => theme.color.main};
  }
`;

export default LoadingPage;
