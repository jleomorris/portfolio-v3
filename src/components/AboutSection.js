import React from "react";
import home1 from "../img/home1.png";
import aboutImg from "../img/about.jpg";
import bannerBackground from "../img/banner-full-size.jpg";
import { About, Description, Image, Hide } from "../styles";
// Styled Components
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
// Components
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="img-filter"></div>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnimation}>James Morris,</motion.h1>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Front end</span> developer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              MSc Comp Science graduate
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Actively seeking work, interested in front end development positions
          in London/within 20 miles of Southend on Sea, Essex
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </Description>
      <Wave />
      <Image>
        <motion.img
          src={aboutImg}
          alt="guy with a camera"
          variants={photoAnimation}
        />
      </Image>
    </StyledAbout>
  );
};

//Styled components
const StyledAbout = styled(About)`
  background: url(${bannerBackground});
  background-size: cover;
  background-position: top;
  position: relative;
  z-index: 0;

  .img-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00000066;
    z-index: -1;
  }
`;

export default AboutSection;
