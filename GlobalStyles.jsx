import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: #f5f5f5;
  }

  .container {
    max-width: 1136px;
    margin: 0 auto;
  }
`


export default GlobalStyle