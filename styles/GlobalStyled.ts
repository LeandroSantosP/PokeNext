import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Helvetica sans-serif;
}

  body {
   color: #111;
   text-decoration: "none";
   padding: 0;
   margin: 0;

  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`