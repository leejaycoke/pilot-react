import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    color: ${theme.color.black};
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,Arial,sans-serif;
  }

  .a11yHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }
`;

export default GlobalStyle;
