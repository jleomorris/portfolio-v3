import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;

    .answer,
    .title-container {
      text-align: left;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  /* padding-right: 5rem; */
  z-index: 2;

  h2 {
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    padding: 0;

    h2 {
      margin-top: 4rem;
    }

    h1 {
      margin-top: 2rem;
    }

    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
