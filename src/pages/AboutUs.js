import React from 'react';
//Page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import TimelineSection from '../components/TimelineSection';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollToTop from '../components/ScrollToTop';
// Components
import Footer from '../components/Footer';

const AboutUs = ({ isNavOpen }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      className={isNavOpen ? 'blur' : ''}
    >
      <AboutSection />
      <ServicesSection />
      <TimelineSection />
      <FaqSection />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutUs;
