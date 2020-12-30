import React from "react";
import home2 from "../img/home2.png";
// Styles
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import { scrollRevealLeft, scrollRevealRight } from "../animation";
import { useScroll } from "./useScroll";
// Framer motion
import { motion } from "framer-motion";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUserEdit,
  faCompressAlt,
  faLowVision,
  faCodeBranch,
  faLanguage,
  faEdit,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithub,
  faLeanpub,
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faNpm,
  faBootstrap,
  faWordpress,
  faReact,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <Services>
      <Description>
        <h2>
          <span>Always improving</span>
        </h2>
        <p class="skill-title">Soft skills</p>
        <Cards
          variants={scrollRevealLeft}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Experience collaborating with teams</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faUserEdit} />
              <h3>Keen eye for UI and UX design</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faLeanpub} />
              <h3>Always willing to learn new skills</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" />
               */}
              <FontAwesomeIcon icon={faCompressAlt} />
              <h3>Knowledge of responsive design</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faLowVision} />
              <h3>Knowledge of best accessibility practices</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
        </Cards>
        <p class="skill-title">Technical skills</p>
        <Cards
          variants={scrollRevealRight}
          animate={controls2}
          initial="hidden"
          ref={element2}
        >
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faHtml5} />
              <h3>HTML</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faCss3Alt} />
              <h3>CSS</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faSass} />
              <h3>SASS</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faJsSquare} />
              <h3>Javascript</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faNpm} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>npm</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faBootstrap} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Bootstrap</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faWordpress} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Wordpress</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faGit} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Git</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Github</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faReact} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>React</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faCodeBranch} />
              <h3>SVN</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <FontAwesomeIcon icon={faEdit} />
              <h3>Photoshop</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faAws} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>AWS</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faLanguage} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>APIs</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
        </Cards>
        <p class="skill-title">React skills</p>
        <Cards
          variants={scrollRevealRight}
          animate={controls3}
          initial="hidden"
          ref={element3}
        >
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faReact} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Router</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faReact} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Redux</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faReact} />
              {/* <img src={teamwork} alt="teamwork icon" /> */}
              <h3>Axios</h3>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  .skill-title {
    padding: 0 !important;
    padding-bottom: 2rem !important;
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    @media (max-width: 1300px) {
      text-align: left;
      margin-left: 2rem;
    }
  }
`;

const Cards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 1300px) {
    justify-content: space-evenly;
  }
`;

const Card = styled.div`
  flex-basis: 15rem;
  margin: 4rem 0rem;

  @media (max-width: 600px) {
    margin-right: 0;
    /* opacity: 0; */
  }

  .icon {
    display: flex;
    align-items: center;

    svg {
      color: #d9ce23;
      font-size: 6rem;
    }

    h3 {
      margin-left: -1rem;
      margin-top: 3rem;
      background: #000000bd;
      color: white;
      padding: 1rem;
      border-radius: 20px;
    }
  }
`;

export default ServicesSection;
