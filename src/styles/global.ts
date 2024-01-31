import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
   }

   #root{
       margin:0 auto;
   }

   a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white}
   }

   ul, li{
    list-style: none;
   }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary_regular}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.quarternary};
    color: ${({ theme }) => theme.colors.white}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @font-face {
    font-family: Marvel;
    src: url('/assets/fonts/Marvel-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
  }

`;

export default GlobalStyle;
