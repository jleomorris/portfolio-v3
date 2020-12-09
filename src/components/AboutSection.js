import React from "react";
import home1 from "../img/home1.png";
import aboutImg from "../img/about.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
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
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={aboutImg} alt="guy with a camera" />
      </Image>
    </About>
  );
};

//Styled components

export default AboutSection;
