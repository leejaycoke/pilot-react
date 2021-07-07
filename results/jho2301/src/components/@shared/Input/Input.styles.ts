import styled from 'styled-components';

import PALETTE from '../../../constants/palette';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${PALETTE.GRAY_400};
  padding: 0.5rem;
  width: 100%;
`;

export default StyledInput;
