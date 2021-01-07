import React from "react";
import { Link, BrowserRouter, useLocation } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// Styled components
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  const { pathname } = useLocation();

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
              <Link to={`${process.env.PUBLIC_URL}/`}>
                <p>About</p>
              </Link>
              <StyledLine
                transition={{ duration: 0.74 }}
                initial={{ width: "0%" }}
                animate={{
                  width:
                    pathname === `${process.env.PUBLIC_URL}/` ? "100%" : "0%",
                }}
              />
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/projects`}>
                <p>Projects</p>
              </Link>
              <StyledLine
                transition={{ duration: 0.74 }}
                initial={{ width: "0%" }}
                animate={{
                  width:
                    pathname === `${process.env.PUBLIC_URL}/projects`
                      ? "100%"
                      : "0%",
                }}
              />
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/custom-desktops`}>
                <p>Custom desktops</p>
              </Link>
              <StyledLine
                transition={{ duration: 0.74 }}
                initial={{ width: "0%" }}
                animate={{
                  width:
                    pathname === `${process.env.PUBLIC_URL}/custom-desktops`
                      ? "100%"
                      : "0%",
                }}
              />
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/contact`}>
                <p>Contact</p>
              </Link>
              <StyledLine
                transition={{ duration: 0.74 }}
                initial={{ width: "0%" }}
                animate={{
                  width:
                    pathname === `${process.env.PUBLIC_URL}/contact`
                      ? "100%"
                      : "0%",
                }}
              />
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

  a {
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

    @media (max-width: 800px) {
      padding: 2rem 4rem 1rem 1rem;
    }

    svg {
      font-size: 3rem;
      position: absolute;
      margin: 2rem;
      top: 0;
      right: 0;
      color: white;
      cursor: pointer;
    }

    a {
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
      position: relative;
      letter-spacing: 0.6rem;
      text-transform: uppercase;
      margin: 3rem 0;
      font-size: 6rem;
      width: fit-content;

      @media (max-width: 800px) {
        margin: 1rem 0 0 0;
      }

      a {
        p {
          padding: 0;
          margin: 0.5rem 0rem;
        }
      }
    }

    // Media Queries
    @media (max-width: 1300px) {
      /* padding: 2rem 1rem; */

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

const StyledLine = styled(motion.div)`
  height: 0.1rem;
  background: white;
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default Nav;
