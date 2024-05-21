import { createGlobalStyle } from 'styled-components';
import Themunday from '../assets/fonts/Themunday-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Themunday";
    src: url(${Themunday}) format('woff2'); 
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  body {
    // default font style
    font-family: "Inter", sans-serif;
    letter-spacing: -0.8px;
    font-weight: 400;
    background-color: ${(props) => props.theme.color.orange50};
  }
`;

export default GlobalStyle;
