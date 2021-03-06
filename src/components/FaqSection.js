import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Components
import { About } from '../styles';
import Toggle from './Toggle';
// Framer motion
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollRevealRight } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq>
      <h2>
        <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <motion.div
          variants={scrollRevealRight}
          initial='hidden'
          animate={controls}
          ref={element}
        >
          <Toggle title='What front end experience do I have?'>
            <div className='answer'>
              <p>
                From Sept 2019 to Sept 2020 I completed a one year internship at
                the digital learning company Saffron Interactive (Front End
                Developer and IT Technician). Over this period I gained
                experience of React, working on live client projects and I also
                developed a keen eye for UI, UX and responsive design.
              </p>
              <p>
                In March 2020 I began a new role at IronmongeryDirect as a React
                Developer. Since starting here I've strengthened my React and
                Redux principles and have contributed to multiple new exciting
                projects in line with a company rebrand.
              </p>
            </div>
          </Toggle>
          <Toggle title='What are my qualifications?'>
            <div className='answer'>
              <p>
                I hold a Bsc in Forensic Biology (2:1) and a Msc in Computer
                Science with Industrial Placement (Merit).
              </p>
            </div>
          </Toggle>
          {/* <Toggle title="When can I start new employment?">
            <div className="answer">
              <p>Notice period for my current employment is 2 months.</p>
            </div>
          </Toggle> */}
          <Toggle title='What motivates me?'>
            <div className='answer'>
              <p>
                My desire to work within the computing industry stemmed from the
                moment I learnt how to build my first PC (examples of my built
                systems can be seen on the{' '}
                <Link to={`${process.env.PUBLIC_URL}/custom-desktops`}>
                  Custom Desktops
                </Link>{' '}
                page). My fine attention to detail can be seen in the desktops I
                produce, and this is the same level of focus and creativity I
                bring when working on projects (examples can be seen on the the{' '}
                <Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link>{' '}
                page).
              </p>
              <p>
                I'm driven and motivated to become as strong a developer as I
                can be. I like to maintain a high rate of learning and am always
                exposing myself to new frameworks, libraries and technologies.
                At present I am continuing development of my React skills, in
                the future I'd like to develop my back end skills as I'd like to
                eventually pursue a career as a full stack developer.
              </p>
            </div>
          </Toggle>
          <Toggle title='What are my hobbies?'>
            <div className='answer'>
              <p>
                In my spare time I build PCs for friends and family - I'm
                currently hooked on small form factor (SFF) PCs. I've also been
                known to pick up a guitar and carry out some song writing when
                the mood strikes.
              </p>
            </div>
          </Toggle>
          <Toggle title='How can you contact me?'>
            <div className='answer'>
              <p>
                My contact details can be found on the{' '}
                <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>{' '}
                page.
              </p>
            </div>
          </Toggle>
        </motion.div>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  padding-top: 0;

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
    padding-top: 2rem;

    p {
      padding: 1rem 0rem;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.primaryColor};
        font-size: 1.4rem;
      }
    }
  }
`;

export default FaqSection;
