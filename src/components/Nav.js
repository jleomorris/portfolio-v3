import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";

const Nav = () => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StyledNav>
      <h1>
        {/* <Link id="logo" to="/"> */}
        <Link id="logo" to={`${process.env.PUBLIC_URL}/`}>
          Jleo
        </Link>
      </h1>
      <ul>
        <li>
          {/* <Link to="/">About</Link> */}
          <Link to={`${process.env.PUBLIC_URL}/`}>About</Link>
        </li>
        <li>
          {/* <Link to="/projects">Projects</Link> */}
          <Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link>
        </li>
        <li>
          {/* <Link to="/custom-desktops">Custom desktops</Link> */}
          <Link to={`${process.env.PUBLIC_URL}/custom-desktops`}>
            Custom desktops
          </Link>
        </li>
        <li>
          {/* <Link to="/contact">Contact </Link> */}
          <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>{" "}
        </li>
      </ul>
    </StyledNav>
    //{" "}
    // </BrowserRouter>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  /* background-color: #282828; */
  background: #070707;
  position: sticky;
  top: 0;
  z-index: 10;

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
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
    letter-spacing: 0.6rem;
    text-transform: uppercase;
    margin: 1rem 0;
  }

  // Media Queries

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 2rem;
      font-size: 2.5rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
