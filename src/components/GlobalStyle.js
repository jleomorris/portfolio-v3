import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* background: #1b1b1b; */
    background: radial-gradient(#525252,#000000);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid ${(props) => props.theme.primaryColor};
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;


    &:hover {
      background-color: ${(props) => props.theme.primaryColor};
      color: white;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
  }

  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  // Conditional classes
  .blur {
    filter: blur(8px) !important;
  }

  .rotate90 {
    transform: rotate(-90deg) !important;
  }

  .height100 {
    height: 100vh !important;
  }
  
// Media Queries

html {
  @media (max-width: 1700px) {
    font-size: 75%;
  }

}
`;

export default GlobalStyle;
