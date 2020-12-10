import React from "react";
import home1 from "../img/home1.png";
import aboutImg from "../img/about.jpg";
import bannerBackground from "../img/banner-full-size.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="img-filter"></div>
      <Description>
        <div className="title">
          <Hide>
            <h1>James Morris,</h1>
          </Hide>
          <Hide>
            <h2>
              <span>Front end</span> developer
            </h2>
          </Hide>
          <Hide>
            <h2>MSc Comp Science graduate</h2>
          </Hide>
        </div>
        <p>
          Actively seeking work, interested in development positions in
          London/within 20 miles of Southend on Sea, Essex
        </p>
        <button>Contact</button>
      </Description>
      <Image>
        <img src={aboutImg} alt="guy with a camera" />
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
