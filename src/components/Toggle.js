import React, { useState } from "react";
// Framer motion
import { motion } from "framer-motion";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// Styled components
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledToggle
      layout
      className="question"
      onClick={() => setToggle(!toggle)}
    >
      <div className="title-container">
        <motion.h4 layout>{title}</motion.h4>
        <FontAwesomeIcon icon={toggle ? faChevronDown : faChevronUp} />
      </div>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 2rem;
    }
  }
`;

export default Toggle;
