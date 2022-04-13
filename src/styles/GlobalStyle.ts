import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme'

interface Props {
    theme: ThemeType
}
export const GlobalStyle = createGlobalStyle<Props>`
  *, *::after, *::before {
    box-sizing:border-box;
    margin: 0;
    outline:none;
    padding:0;
    font-family: 'Montserrat', sans-serif;
  }

  :root{
    --white:#FFFFFF;

    --gray-100:#E1E1E6;
    --gray-300:#A8A8B3;
    --gray-800:#29292E;
    --gray-850: #1F2729;
    --gray-900:#121214;

  }

  html, body {
    overflow-x:hidden;
  }

  html{
    @media (max-width: 1080px){
      font-size:93.75%;
    }
    @media (max-width: 720px){
      font-size:87.5%;
    }
  }

  body{
    background:var(--gray-900);
    color:var(--white);
  }

  body, input, textarea, select, button{
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button{
    cursor:pointer;
  }

  a{
    color:inherit;
    text-decoration: none;
  }

`
