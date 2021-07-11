import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    color: ${theme.color.black};
  }
`;

export default GlobalStyle;
