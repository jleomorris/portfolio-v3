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
  fade,
  photoAnimation,
  lineAnimation,
} from "../animation";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectState);

  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      // style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation}></Frame1>
        <Frame2 variants={sliderAnimation}></Frame2>
        <Frame3 variants={sliderAnimation}></Frame3>
        <Frame4 variants={sliderAnimation}></Frame4>
      </motion.div>
      {projects.map((project) => (
        <Project>
          <div className="image-container">
            {project.titleColor == "dark" ? (
              <ProjectTitleDark variants={fade}>
                {project.title}
              </ProjectTitleDark>
            ) : (
              <ProjectTitleLight variants={fade}>
                {project.title}
              </ProjectTitleLight>
            )}
            {/* <ProjectTitleDark variants={fade}>{project.title}</ProjectTitleDark> */}
            {/* <motion.div
              variants={lineAnimation}
              style={{ background: project.backgroundColor }}
              className="line"
            ></motion.div> */}
            <Link to={project.url}>
              <hide>
                <motion.img
                  variants={photoAnimation}
                  src={project.mainImage}
                  alt={project.alt}
                />
              </hide>
            </Link>
            {/* <p>{project.description}</p> */}
          </div>
        </Project>
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  /* padding: 5rem 10rem; */

  /* h2 {
    padding: 1rem 0rem;
  } */
`;

const Project = styled.div`
  /* padding-bottom: 1rem; */

  /* h2 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    position: absolute;
  } */

  .line {
    height: 0.2rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  .image-container {
    position: relative;

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
    height: 70vh;
    object-fit: cover;
    /* filter: brightness(0.5); */
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const ProjectTitleLight = styled(motion.h2)`
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  position: absolute;
  padding: 1rem;
`;

const ProjectTitleDark = styled(motion.h2)`
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  position: absolute;
  padding: 1rem;
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  /* background: #fffebf; */
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
  /* background: #ff8efb; */
`;

const Frame3 = styled(Frame1)`
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  /* background: #8ed2ff; */
`;

const Frame4 = styled(Frame1)`
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  /* background: #8effa0; */
`;

export default Projects;
