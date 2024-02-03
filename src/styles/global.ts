import { createGlobalStyle } from 'styled-components';

import TTFMarvel from '../assets/fonts/Marvel/Marvel-Regular.ttf';
import WOFFMarvel from '../assets/fonts/Marvel/Marvel-Regular.woff';
import WOFF2Marvel from '../assets/fonts/Marvel/Marvel-Regular.woff2';

import TTFRobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    html{
          min-height: 100dvh;
    }

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
   }

   #root{
       margin:0 auto;
       min-height: 100dvh;
   }

    input, button, select, textarea{
        background-color: transparent;
        appearance: none;
        -webkit-appearance: none;
        border: none;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.small_14};

    }

    button{
      cursor: pointer;
    }

   a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
   }

   ul, li{
    list-style: none;
   }

   h1, h2, h3, h4, h5, h6{
    text-transform: uppercase;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.primary};
   }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.white};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background: ${({ theme }) => theme.colors.background};
    min-height: 100dvh;
  }

  .error{
    font-size: ${({ theme }) => theme.fontSizes.small_12};
    color:red;
    display: block;
  }

  @font-face {
    font-family: 'Marvel';
    src: url(${TTFMarvel}) format('truetype'), url(${WOFF2Marvel}) format('woff2'), url(${WOFFMarvel}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Roboto';
      src: url(${TTFRobotoRegular}) format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
`;

export default GlobalStyle;
