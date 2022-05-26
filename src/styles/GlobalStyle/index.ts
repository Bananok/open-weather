import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, p, ul, ol, li, figure, figcaption, blockquote, dl, dd, div
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
