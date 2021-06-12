import React, { useEffect } from 'react';
// Images
import aboutImg from '../img/about.jpg';
import aboutImgMobile from '../img/about_mobile.jpg';
import bannerBackground from '../img/banner-full-size.jpg';
// Styled Components
import styled from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
// Components
import { About, Description, Image, Hide } from '../styles';
import Wave from './Wave';
// Hooks
import useWindowSize from '../hooks/useWindowSize';

const AboutSection = () => {
  const { screenWidth } = useWindowSize();

  useEffect(() => {
    testResponse();
  }, []);

  async function testResponse() {
    const data = await getContributions(
      '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',
      'jleomorris'
    );
    console.log('AboutSection.testResponse', data);
  }

  async function getContributions(token, username) {
    const headers = {
      Authorization: `bearer ${token}`,
    };
    const body = {
      query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
    };
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
    });
    const data = await response.json();
    return data;
  }

  return (
    <StyledAbout className='about'>
      <div className='about__img-filter'></div>
      <Description className='about__description'>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnimation}>James Morris,</motion.h1>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Front End</span> Developer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              MSc Comp Science graduate
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade} className='about__job-title'>
          React Developer at IronmongeryDirect - Basildon, Essex
        </motion.p>
        <a href='mailTo:james-morris2010@hotmail.co.uk'>
          <motion.button variants={fade} className='about__contact-btn'>
            Contact
          </motion.button>
        </a>
      </Description>
      <Wave />
      <Image>
        {screenWidth > 1300 ? (
          <motion.img
            src={aboutImg}
            alt='personal photo'
            variants={photoAnimation}
            className='about__img'
          />
        ) : (
          <motion.img
            src={aboutImgMobile}
            alt='personal photo'
            variants={photoAnimation}
            className='about__img about__img--mobile'
          />
        )}
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

  .about__img-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  .about {
    &__job-title {
      padding: 1rem 2rem;
      background: #00000073;
      margin: 2rem 0rem 1rem 0rem;
      border-radius: 30px;
      width: fit-content;
    }

    &__contact-btn {
      border-radius: 30px;
      background: #dbff6fb5;
      border: none;
    }

    &__description {
      @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    &__img--mobile {
      border-radius: 50%;
    }
  }
`;

export default AboutSection;
