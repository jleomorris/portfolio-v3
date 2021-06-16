import React from 'react';
import { Link } from 'react-router-dom';
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
// Alice Carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProjectState } from '../projectState';

const ProjectsSection = () => {
  const { screenWidth } = useWindowSize();

  const items = ProjectState().map((proj) => (
    <div className='carousel-item'>
      <p className='carousel-item__title'>{proj.title}</p>
      <Link to={`${proj.url}`}>
        <img src={proj.images[0].src} className='sliderimg' />
      </Link>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <StyledProjects className='project-carousel'>
      <h2 className='section-title'>
        <span>Latest Projects</span>
      </h2>
      <AliceCarousel
        autoPlay
        autoPlayInterval='3000'
        animationType='fadeout'
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        controlsStrategy='alternate'
      ></AliceCarousel>
    </StyledProjects>
  );
};

//Styled components
const StyledProjects = styled(motion.div)`
  @media (min-width: 0px) {
    padding: 0rem 2rem 2rem 2rem;
  }
  @media (min-width: 700px) {
    padding: 0rem 10rem 10rem 10rem;
  }
  @media (min-width: 1300px) {
    padding: 0rem 10rem 5rem 10rem;
  }

  .carousel-item {
    &__title {
      position: absolute;
      width: 95%;
      background: #000000bf;
      color: white;
      padding: 0.5rem 0;
      text-align: center;
      border-radius: 10px 10px 0 0;
      font-size: 14px;
    }
  }

  .sliderimg {
    width: 95%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
    object-position: left;
  }
`;

export default ProjectsSection;
