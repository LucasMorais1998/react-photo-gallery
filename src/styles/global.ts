import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #27282F;

    --white-color: #fff;
    --gray-color: #3D3F43;
    --purple-color: #756DF4

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiaased;
  }

  body, input {
    font-family: Helvetica, sans-serif;
    font-weight: 400;
  }
`;
