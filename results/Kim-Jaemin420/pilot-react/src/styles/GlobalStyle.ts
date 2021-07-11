import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    margin: 0;
    padding: 0;
    font-family: AppleSDGothicNeoR, AppleSDGothicNeo, "돋움", dotum, Helvetica, sans-serif;
  }
  h1 {
    font-size: 25px;
    font-weight: 600;
  }
  ul, li {
    margin: 0;
    padding: 0 30px;
    list-style: none;
    display: inline-block;
  }
`;

export default GlobalStyle;
