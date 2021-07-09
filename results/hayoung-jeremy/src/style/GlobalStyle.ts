import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,*:before,*:after{
    box-sizing: border-box;
  }
  body{
    font-family: "Montserrat", "Noto Sans KR", sans-serif;
    background-color: #f7f7f7;
  }
`;

export default GlobalStyle;
