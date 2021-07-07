import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PALETTE from '../src/constants/palette';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    outline: none;
    color: ${PALETTE.BLACK_400}
  }
`;

export default GlobalStyle;
