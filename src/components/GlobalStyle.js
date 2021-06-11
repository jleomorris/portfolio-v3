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

  // Timeline
.vertical-timeline-element-title {
    color: ${(props) => props.theme.timeline.fontColor};
    margin-bottom: 1rem;
}

.vertical-timeline-element-content {
    p {
        color: ${(props) => props.theme.timeline.fontColor};
        padding: 0;
    }
}

.vertical-timeline-element-date {
    color: ${(props) => props.theme.timeline.background};
}

.vertical-timeline-element-icon {
    svg {
        display: block;
        width: 24px !important;
        height: 24px;
        position: relative;
        left: 50%;
        top: 50%;
        margin-left: -12px;
        margin-top: -12px;
    }
}

.timeline__skills {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;

    .timeline__skill {
        padding: 0.5rem 1rem;
        margin-right: 0.5rem;
        background: #c5c5c587;
        border-radius: 20px;
    }
}

}
`;

export default GlobalStyle;
