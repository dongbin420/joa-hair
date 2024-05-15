import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Themunday";
    src: url('/fonts/Themunday-Regular.woff2') format('woff2'); 
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    // default font style
    font-family: "Inter", sans-serif;
    letter-spacing: -0.8px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
