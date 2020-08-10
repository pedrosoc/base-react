import { createGlobalStyle } from "styled-components";

import PoppinsFont from "./fonts/Poppins-Medium.ttf";
import RobotoFont from "./fonts/Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsFont}) format('truetype');
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoFont}) format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
