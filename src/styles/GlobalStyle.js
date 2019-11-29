import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --gray-light: #ACACAC;
    --text: #6E6E6E;
    --gray-dark: #343a40;
    --primary: #15573F;
    --primary-light: #7BAF9E;
    --secondary: #FD9872;
    --danger: #F71D1D;
  }

  body, html {
    background: #fff;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  #root {
    display: grid;
    grid-template-areas:
        "header"
        "main";
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    min-height: 100vh;
  }
`

export default GlobalStyle
