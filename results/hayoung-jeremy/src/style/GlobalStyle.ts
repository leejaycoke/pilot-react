import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import PALETTE from "./palette";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,*:before,*:after{
    box-sizing: border-box;
  }
  body{
    font-family: "Montserrat", "Noto Sans KR", sans-serif;
    background-color: ${PALETTE.BACKGROUND};
  }
  a{
    text-decoration: none;
  }
  button{
    outline: none;
    font-family: "Montserrat", "Noto Sans KR", sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyle;
