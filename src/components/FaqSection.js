import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import { About } from "../styles";
import Toggle from "./Toggle";
// Framer motion
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What relevant experience do I have?">
          <div className="answer">
            <p>
              From Sept 2019 to Sept 2020 I completed a one year internship at
              the digital learning company Saffron Interactive — as a Front End
              Developer and IT Technician. Over this period I gained experience
              of working on live client projects using React and I also
              developed a keen eye for UI, UX and responsive design.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are my qualifications?">
          <div className="answer">
            <p>
              I hold a Bsc in Forensic Biology (2:1) and a Msc in Computer
              Science with Industrial Placement (Merit).
            </p>
          </div>
        </Toggle>
        <Toggle title="When can I start new employment?">
          <div className="answer">
            <p>Notice period for my current employment is 2 months.</p>
          </div>
        </Toggle>
        <Toggle title="What motivates me?">
          <div className="answer">
            <p>
              My desire to work within the computing industry first stemmed from
              the moment I learnt how to build my first PC. Examples of my built
              systems can be seen on the{" "}
              <Link to="/custom-desktops">custom desktops</Link> page. My fine
              attention to detail can be seen in the desktops I produce, and
              this is the same level of focus and creativity I bring when
              working on projects.
            </p>
            <p>
              Examples of websites and apps I've developed can be seen in
              projects.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are my hobbies?">
          <div className="answer">
            <p>
              In my spare time I build PCs for friends and family - I'm
              currently hooked on small form factor (SFF) PCs. I've also been
              known to pick up a guitar and carry out some song writing when the
              mood strikes.
            </p>
          </div>
        </Toggle>
        <Toggle title="How can you contact me?">
          <div className="answer">
            <p>
              My contact details can be found on the{" "}
              <Link to="/contact">Contact</Link> page.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
