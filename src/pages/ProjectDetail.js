import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ProjectDetail = () => {
  const history = useHistory();
  const currentUrl = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  // useEffect

  useEffect(() => {
    const currentProject = projects.filter(
      (project) => project.url === currentUrl
    );
    // debugger;
    setProject(currentProject[0]);
  }, [projects, currentUrl]);

  return (
    <>
      {project && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{project.title}</h2>
            <div className="description-container">
              <h3>Description</h3>
              <p>{project.description}</p>
            </div>
            <div className="skills-container">
              <h3>Skills developed</h3>
              <ul>
                {project.skillsDeveloped.map((project) => (
                  <li>{project}</li>
                ))}
              </ul>
            </div>
          </Headline>
          <Features>
            {project.features.map((award) => (
              <Feature
                title={award.title}
                description={award.description}
                key={award.title}
                lineColor={award.lineColor}
              />
            ))}
          </Features>
          <ImageDisplay>
            {project.images.map((image) => (
              <img src={image.src} alt={image.alt} />
            ))}
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

// Styled components
const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 5vh;
  position: relative;

  .description-container {
    position: relative;
    width: 60%;
    margin: 10rem auto;
    min-height: 30vh;
  }

  .skills-container {
    position: relative;
    padding: 3rem 5rem;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem auto;
    min-height: 30vh;
    width: 50%;
  }

  h3 {
    position: absolute;
    top: -30px;
    right: 0;
    margin-right: 3rem;
    border: 1px solid white;
    padding: 1rem 2rem;
    background: white;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }

  h2 {
    /* position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%); */
    /* border: 1px solid white; */
    padding: 1rem 3rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    color: #00000000;
    text-shadow: 4px 5px 4px #ababab;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    margin-top: 3rem;
  }

  p {
    border: 1px solid white;
    /* margin: 8rem auto; */
    /* width: 60%; */
    padding: 3rem 5rem;
  }
`;

const Features = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 10rem;
`;

const StyledFeature = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 2rem 0rem;
  }

  .line {
    width: 100%;
    /* background: #23d997; */
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// Components
const Feature = ({ title, description, lineColor }) => {
  return (
    <StyledFeature>
      <h3>{title}</h3>
      <div style={{ background: lineColor }} className="line"></div>
      <p>{description}</p>
    </StyledFeature>
  );
};

export default ProjectDetail;
