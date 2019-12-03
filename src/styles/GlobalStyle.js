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
    --background: #F2F2F2;
    --gray-light: #ACACAC;
    --gray-dark: #343a40;
    --text: #6E6E6E;
    --title-highlighted: #0C261C;
    --primary: #15573F;
    --primary-light: #7BAF9E;
    --secondary: #FD9872;
    --danger: #F71D1D;
  }

  body, html {
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`

export default GlobalStyle
