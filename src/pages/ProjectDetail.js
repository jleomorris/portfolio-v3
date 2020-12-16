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
            <img src={project.mainImage} alt={project.imageAlt} />
          </Headline>
          <Awards>
            {project.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={project.secondaryImage} alt={project.imageAlt} />
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
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    border: 1px solid white;
    padding: 1rem 3rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    margin-top: 3rem;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 10rem;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 2rem 0rem;
  }

  .line {
    width: 100%;
    background: #23d997;
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
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default ProjectDetail;
