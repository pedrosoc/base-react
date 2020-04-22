import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
