import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectState);

  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {projects.map((project) => (
        <Project>
          <h2>{project.title}</h2>
          <div className="line"></div>
          <div className="image-container">
            <Link to={project.url}>
              <img src={project.mainImage} alt={project.alt} />
            </Link>
            <p>{project.description}</p>
          </div>
        </Project>
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;

  h2 {
    color: white;
  }

  .line {
    height: 0.5rem;
    background: #cccccc;
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
    filter: brightness(0.5);
  }
`;

export default Projects;
