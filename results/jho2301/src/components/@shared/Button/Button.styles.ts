import styled from 'styled-components';

import PALETTE from '../../../constants/palette';

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid ${PALETTE.GRAY_400};
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: 0.2s all;
  width: 100%;

  &:hover {
    background-color: ${PALETTE.GRAY_100};
    border: 1px solid ${PALETTE.GRAY_200};
  }

  &:active {
    background-color: ${PALETTE.GRAY_200};
    border: 1px solid ${PALETTE.GRAY_400};
  }
`;

export default StyledButton;
