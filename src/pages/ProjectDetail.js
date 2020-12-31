import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link, Redirect } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Components
import Footer from "../components/Footer";

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
            <div className="github-container">
              <a
                href={project.githubDirectoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <FontAwesomeIcon icon={faCode} />
                  Code
                </button>
              </a>
              <a href={project.githubPagesUrl} target="_blank" rel="noreferrer">
                <button>
                  <FontAwesomeIcon icon={faGithub} />
                  Demo
                </button>
              </a>
            </div>
            <h2>{project.title}</h2>
            <div className="description-skills-container">
              <div className="description-container">
                <h3>Description</h3>
                <p>{project.description}</p>
              </div>
              <div className="skills-container">
                <h3>Skills developed</h3>
                {project.skillsDeveloped.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <FontAwesomeIcon icon={skill.icon} />
                    <p style={{ color: project.skillIconColor }}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
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
              <img src={image.src} alt={image.alt} key={image.src} />
            ))}
          </ImageDisplay>
        </Details>
      )}
      <Footer />
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

  .github-container {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: 1px solid white;
      margin-left: 1rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: white;
        color: black;
      }

      svg {
        font-size: 2rem;
        margin-right: 1rem;
      }
    }
  }

  .description-skills-container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    padding: 8rem 5rem;

    @media (max-width: 1500px) {
      flex-direction: column;
      align-items: center;
      padding: 5rem 5rem;
    }

    .description-container {
      position: relative;
      width: 40%;
      min-height: 30vh;
      border: 1px solid white;

      p {
        margin: 8rem auto;
        padding: 3rem 5rem;
      }

      @media (max-width: 1500px) {
        margin: 4rem;
        width: 90%;
      }
    }

    .skills-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
      padding: 4rem 2rem;
      border: 1px solid white;
      min-height: 30vh;
      width: 40%;

      @media (max-width: 1500px) {
        margin: 4rem;
        width: 90%;
      }

      .skill {
        display: flex;
        position: relative;
        margin: 2rem;

        svg {
          color: rgba(255, 255, 255, 0.3);
          font-size: 6rem;
        }

        p {
          text-shadow: 3px 3px 4px #505050;
          text-align: center;
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }
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
    padding: 1rem 3rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    color: #00000000;
    text-shadow: 4px 5px 4px #ababab;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;

    @media (max-width: 800px) {
      margin-top: 4rem;
    }
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    margin-top: 3rem;
  }
`;

const Features = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 5rem 10rem;

  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledFeature = styled.div`
  @media (max-width: 1500px) {
    width: 70%;
    margin: 0rem auto;
  }

  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 2rem 0rem;
  }

  .line {
    width: 100%;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    margin-bottom: 3rem;
    /* height: 100vh; */
    /* object-fit: cover; */

    @media (max-width: 1500px) {
      width: 100%;
    }
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
