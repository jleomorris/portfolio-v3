import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../components/ScrollToTop";
// Components

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutUs;
