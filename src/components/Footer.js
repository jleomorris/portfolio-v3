import React from "react";
import styled from "styled-components";
import cv from "../pages/CV_2020.pdf";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="copyright-contact">
        <p>© James Morris 2020</p>
        <a href="mailTo:james-morris2010@hotmail.co.uk">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              display: "inline-block",
              margin: "0rem 0.5rem",
              fontSize: "1rem",
            }}
          />
          <p style={{ display: "inline-block", wordBreak: "break-all" }}>
            james-morris2010@hotmail.co.uk
          </p>
        </a>
        <p>
          All product names, logos, and brands are property of their respective
          owners. All company, product and service names used in this website
          are for identification purposes only. Use of these names, logos, and
          brands does not imply endorsement
        </p>
      </div>
      <div className="links">
        <a target="_blank" href="https://github.com/jleomorris">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a target="_blank" href={cv}>
          <FontAwesomeIcon icon={faFile} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/james-morris-62a66b166/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #070707;
  display: flex;
  justify-content: space-between;
  padding: 1rem 8rem;

  @media (max-width: 800px) {
    padding: 1rem 0rem;
  }

  a {
    text-decoration: none;
  }

  svg {
    font-size: 2rem;
    color: white;
  }

  .copyright-contact {
    /* border: 2px solid red; */
    flex: 2;
    padding: 0.5rem 1rem;

    p {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }

  .links {
    padding: 0.5rem 1rem;
    /* border: 2px solid orange; */
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;

    a {
      width: 30%;
      text-align: center;
      color: white;
      margin: 1rem;
    }
  }
`;

export default Footer;
