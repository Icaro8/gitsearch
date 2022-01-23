import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --var_color-text: #fff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,#__next {
  width: 100%;
  height: 100%;
}


`;
