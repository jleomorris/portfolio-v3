import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// Styled components
import styled from "styled-components";

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StyledNav className={isNavOpen ? "height100" : ""}>
      {/* <Link id="logo" to="/"> */}
      <Link id="logo" to={`${process.env.PUBLIC_URL}/`}>
        <h1 className={isNavOpen ? "rotate90" : ""}>Jleo</h1>
      </Link>
      <StyledFontAwesomeIcon
        icon={isNavOpen ? faTimes : faBars}
        onClick={() => setIsNavOpen(!isNavOpen)}
      />
      {isNavOpen && (
        <div className="nav-links">
          <ul>
            <li>
              {/* <Link to="/">About</Link> */}
              <Link to={`${process.env.PUBLIC_URL}/`}>
                <p>About</p>
              </Link>
            </li>
            <li>
              {/* <Link to="/projects">Projects</Link> */}
              <Link to={`${process.env.PUBLIC_URL}/projects`}>
                <p>Projects</p>
              </Link>
            </li>
            <li>
              {/* <Link to="/custom-desktops">Custom desktops</Link> */}
              <Link to={`${process.env.PUBLIC_URL}/custom-desktops`}>
                <p>Custom desktops</p>
              </Link>
            </li>
            <li>
              {/* <Link to="/contact">Contact </Link> */}
              <Link to={`${process.env.PUBLIC_URL}/contact`}>
                <p>Contact</p>
              </Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </StyledNav>
    //{" "}
    // </BrowserRouter>
  );
};

const StyledNav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #070707;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.5s ease;
  /* border: 2px solid green; */

  a {
    /* color: white; */
    text-decoration: none;
    color: #888c91;
    transition: 0.5s all ease;

    &:hover {
      color: white;
    }
  }

  h1 {
    color: white;
    letter-spacing: 0.2rem;
    font-size: 4rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    /* border: 2px solid orange; */
    margin-right: 2rem;
    transition: 0.5s all ease;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  .nav-links {
    transition: all 0.5s ease;
    align-items: center;
    padding: 1rem;
    /* background: #070707; */
    /* border: 2px solid orange; */
    /* display: flex; */

    svg {
      font-size: 3rem;
      position: absolute;
      margin: 2rem;
      top: 0;
      right: 0;
      color: white;
      cursor: pointer;
      /* z-index: 10; */
    }

    a {
      /* color: white; */
      text-decoration: none;
      color: #888c91;
      transition: 0.5s all ease;

      &:hover {
        color: white;
      }
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      flex-direction: column;
    }

    #logo {
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
    }

    li {
      /* padding-left: 10rem; */
      position: relative;
      letter-spacing: 0.6rem;
      text-transform: uppercase;
      margin: 3rem 0;
      font-size: 6rem;

      @media (max-width: 800px) {
        margin: 0;
      }

      a {
        p {
          padding: 0;
          margin: 1rem;
        }
      }
    }

    // Media Queries
    @media (max-width: 1300px) {
      /* flex-direction: column; */
      padding: 2rem 1rem;

      #logo {
        display: inline-block;
        margin: 2rem;
        font-size: 2.5rem;
      }
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  margin: 2rem;
  cursor: pointer;
`;

export default Nav;
