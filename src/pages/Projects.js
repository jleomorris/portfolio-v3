import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animation
import { motion } from "framer-motion";
import {
  sliderAnimation,
  sliderContainer,
  pageAnimation,
  projectBannerAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../animation";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
// Components
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Projects = ({ isNavOpen }) => {
  const [projects, setProjects] = useState(ProjectState);

  useEffect(() => {
    // debugger;
    console.log(projects);
  }, []);

  return (
    <>
      <StyledProjects
        variants={projectBannerAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className={isNavOpen ? "blur" : ""}
      >
        <motion.div variants={sliderContainer}>
          <Frame1 variants={sliderAnimation}></Frame1>
          <Frame2 variants={sliderAnimation}></Frame2>
          <Frame3 variants={sliderAnimation}></Frame3>
          <Frame4 variants={sliderAnimation}></Frame4>
        </motion.div>
        {projects.map((project) => (
          <Project key={project.title}>
            <div className="image-container">
              <div className="title-container">
                <Link to={`${process.env.PUBLIC_URL}${project.url}`}>
                  <ProjectTitle variants={fade}>{project.title}</ProjectTitle>
                </Link>
              </div>
              <Hide>
                {project.isReact && (
                  <motion.div className="react-icon" variants={pageAnimation}>
                    <FontAwesomeIcon icon={faReact} />
                  </motion.div>
                )}
                <motion.div
                  variants={pageAnimation}
                  className="github-container"
                >
                  <a
                    href={project.githubDirectoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a
                    href={project.githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </motion.div>
                <Link to={`${process.env.PUBLIC_URL}${project.url}`}>
                  <motion.img
                    variants={photoAnimation}
                    src={project.banner.src}
                    alt={project.banner.alt}
                  />
                </Link>
              </Hide>
            </div>
          </Project>
        ))}
        <motion.div
          variants={projectBannerAnimation}
          className="flexible-message"
        >
          <h2>Click on a project banner or Github link to view more.</h2>
        </motion.div>
        <ScrollToTop />
      </StyledProjects>
      <Footer />
    </>
  );
};

const StyledProjects = styled(motion.div)`
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  .flexible-message {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    h2 {
      width: 50%;
      font-size: 1.85rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      padding: 1rem;
      color: #00000000;
      text-shadow: 4px 5px 4px #ababab;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
    }
  }

  @media (max-width: 800px) {
    /* .github-container {
      flex-direction: column;
    } */

    .title-container {
      margin-bottom: 12rem !important;

      h2 {
        width: 165%;

        @media (max-width: 800px) {
          width: 80%;
        }
      }
    }
  }
`;

const Project = styled.div`
  width: 20%;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 25%;
  }

  @media (max-width: 800px) {
    width: 33.3%;
  }

  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .title-container {
      position: absolute;
      margin-bottom: 10rem;
      z-index: 1;
      transform: rotate(-90deg);

      h2 {
        padding-bottom: 1rem;
      }
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 65%;
      transform: translate(-50%, -50%);
      color: black;
      border: 1px solid black;
      padding: 1rem;
      margin: 2rem;
      font-size: 2rem;
      font-weight: 900;
    }
  }

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    filter: brightness(0.6);

    @media (max-width: 800px) {
      height: 50vh;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  position: relative;

  .fa-react {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    z-index: 1;
    color: #00c0ff;
    margin: 0.5rem;
  }

  .github-container {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 3rem;
      margin: 1rem;
      color: #888c91;
      transition: 0.5s all ease;

      &:hover {
        color: white;
      }
    }
  }
`;

const ProjectTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  padding: 1rem 4rem;
  color: #00000000;
  text-shadow: 4px 5px 4px #ababab;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
`;

const Frame3 = styled(Frame1)`
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
`;

const Frame4 = styled(Frame1)`
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
`;

export default Projects;
