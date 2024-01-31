import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
      height: 100%;
    }

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
   }

   #root{
       margin:0 auto;
       height: 100%;
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
    background: linear-gradient(0deg, rgba(9,5,36,1) 0%, rgba(12,11,19,1) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: ${({ theme }) => theme.colors.white};
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .error{
    font-size: ${({ theme }) => theme.fontSizes.small_12};
    color:red;
    display: block;
  }

  @font-face {
    font-family: Marvel;
    src: url('/assets/fonts/Marvel-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
  }

`;

export default GlobalStyle;
