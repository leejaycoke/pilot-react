import styled from 'styled-components';

import PALETTE from '../../../constants/palette';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${PALETTE.GRAY_200};
  padding: 0.5rem;
  width: 100%;
  transition: 0.8s border-bottom;

  &:focus {
    border-bottom: 1px solid ${PALETTE.GRAY_900};
  }

  &::placeholder {
    color: ${PALETTE.GRAY_400};
  }
`;

export default StyledInput;
