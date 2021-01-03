import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* background: #1b1b1b; */
    background: radial-gradient(#525252, #131313);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #d9ce23;;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;


    &:hover {
      background-color: #d9ce23;
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
    color: #d9ce23;
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