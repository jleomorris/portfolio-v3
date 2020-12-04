import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h1>James Morris,</h1>
          </div>
          <div className="hide">
            <h2>
              <span>Front end</span> developer
            </h2>
          </div>
          <div className="hide">
            <h2>MSc Comp Science graduate</h2>
          </div>
        </div>
        <p>
          Actively seeking work, interested in development positions in
          London/within 20 miles of Southend on Sea, Essex
        </p>
        <button>Contact us</button>
      </div>
      <div className="image"></div>
      <img src={home1} alt="gut with a camera" />
    </div>
  );
};

export default AboutSection;
