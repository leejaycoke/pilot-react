import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }

`;

export default GlobalStyle;
