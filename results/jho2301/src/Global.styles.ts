import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import PALETTE from '../src/constants/palette';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    outline: none;
    color: ${PALETTE.GRAY_900};
    user-select: none;
  }
`;

export default GlobalStyle;
