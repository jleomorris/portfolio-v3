import React from "react";
import cv from "./CV_2020.pdf";
// Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, rotatingAnimation } from "../animation";
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Components
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Contact = ({ isNavOpen }) => {
  return (
    <>
      <StyledContact
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className={isNavOpen ? "blur" : ""}
      >
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
          </Hide>
        </Title>
        <Hide>
          <CardContainer
          // variants={titleAnimation}
          >
            <motion.div variants={rotatingAnimation} className="contact-card">
              <a href="mailTo:james-morris2010@hotmail.co.uk">
                <h2>Email</h2>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <h3>james-morris2010@hotmail.co.uk</h3>
            </motion.div>
            <motion.div variants={rotatingAnimation} className="contact-card">
              <a target="_blank" href="https://github.com/jleomorris">
                <h2>Github</h2>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <h3>https://www.github.com/jleomorris</h3>
            </motion.div>
            <motion.div variants={rotatingAnimation} className="contact-card">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/james-morris-62a66b166/"
              >
                <h2>LinkedIn</h2>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <h3>https://www.linkedin.com/in/james-morris-62a66b166/</h3>
            </motion.div>
            <motion.div variants={rotatingAnimation} className="contact-card">
              {/* <a target="_blank" href=".\CV_2020.pdf"> */}
              <a target="_blank" href={cv}>
                <h2 style={{ marginBottom: "-2.5rem" }}>CV</h2>
                <FontAwesomeIcon icon={faFile} style={{ fontSize: "15rem" }} />
              </a>
              <h3></h3>
            </motion.div>
          </CardContainer>
        </Hide>
        <ScrollToTop />
      </StyledContact>
      <Footer />
    </>
  );
};

const StyledContact = styled(motion.div)`
  color: #353535;
  min-height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 5vh;
  overflow-x: hidden;
`;

const Title = styled.div`
  padding: 1rem 3rem;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.4rem;
  -moz-letter-spacing: 0.4rem;
  -ms-letter-spacing: 0.4rem;
  letter-spacing: 0.4rem;
  color: #00000000;
  text-shadow: 4px 5px 4px #ababab;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  /* margin-bottom: 4rem;
  color: white; */
  width: 100%;
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5rem 10rem;
  /* width: 70%; */
  overflow: hidden;
  /* border: 2px solid green; */

  .contact-card {
    width: 300px;
    height: auto;
    /* border: 2px solid white; */
    margin: 2rem;

    h3 {
      text-align: center;
      /* word-break: break-all; */
      font-weight: 100;
    }

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h2 {
        margin-bottom: -3.5rem;
        text-shadow: 2px 2px 20px black;
        z-index: 1;
        font-size: 3rem;
        -webkit-letter-spacing: 0.4rem;
        -moz-letter-spacing: 0.4rem;
        -ms-letter-spacing: 0.4rem;
        letter-spacing: 0.4rem;
        color: #00000000;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
      }

      .fa-envelope {
        color: #ffffff85;
      }

      .fa-github {
        color: #cb68cbb8;
      }

      .fa-linkedin {
        color: #0366d6a3;
      }

      .fa-file {
        color: #a7a7a7;
        margin-bottom: 3rem;
      }

      svg {
        font-size: 16rem;

        @media (max-width: 800px) {
          font-size: 8rem;
        }
      }
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Contact;
