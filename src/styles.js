import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .answer,
    .title-container {
      text-align: left;
    }
  }

  @media (max-width: 800px) {
    padding: 2rem 2rem;
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
      margin-top: 1rem;
    }

    h1 {
      margin-top: 2rem;
    }

    button {
      margin: 1rem 0rem 2rem 0rem;
    }
  }
`;

export const Image = styled.div`
  z-index: 2;
  border-radius: 40px;
  width: fit-content;
  overflow: hidden;

  img {
    height: 70vh;
    object-fit: contain;

    @media (min-width: 0) {
      width: 70%;
      height: auto;
      margin: 2rem 0rem;
    }
    @media (min-width: 1300px) {
      width: 100%;
      margin: 0;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
