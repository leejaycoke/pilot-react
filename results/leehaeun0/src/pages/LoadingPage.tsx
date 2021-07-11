import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

const LoadingPage: React.FC = () => {
  return <StyledCircularProgress />;
};

const StyledCircularProgress = styled(CircularProgress)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export default LoadingPage;
