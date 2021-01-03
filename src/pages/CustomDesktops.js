import React from "react";
// Styled components
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  scrollRevealLeft,
  scrollRevealRight,
  titleAnimation,
  rotatingAnimation,
} from "../animation";
// Images
import kolink10 from "../img/custom-desktops/kolink10.png";
import kolink6 from "../img/custom-desktops/kolink6.png";
import kolink2 from "../img/custom-desktops/kolink2.png";
import kolink1 from "../img/custom-desktops/kolink1.png";
import kolink5 from "../img/custom-desktops/kolink5.png";
// Components
import Footer from "../components/Footer";
import { useScroll } from "../components/useScroll";
import ScrollToTop from "../components/ScrollToTop";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const CustomDesktops = ({ isNavOpen }) => {
  const [element, controls] = useScroll();
  const [element_1, controls_1] = useScroll();
  const [element_2, controls_2] = useScroll();
  const [element2, controls2] = useScroll();
  const [element2_1, controls2_1] = useScroll();
  const [element2_2, controls2_2] = useScroll();
  const [element2_3, controls2_3] = useScroll();
  const [element3, controls3] = useScroll();
  const [element3_1, controls3_1] = useScroll();
  const [element3_2, controls3_2] = useScroll();
  const [element4, controls4] = useScroll();
  const [element4_1, controls4_1] = useScroll();
  const [element5, controls5] = useScroll();
  const [element5_1, controls5_1] = useScroll();

  return (
    <>
      <StyledCustomDesktops
        className="intro"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className={isNavOpen ? "blur" : ""}
      >
        <div className="title-container">
          <h1>Kolink Rocket v4</h1>
          <FontAwesomeIcon icon={faTools} />
        </div>
        <p>
          I began building desktops in 2015 and have built 8 custom rigs to
          date. This is my latest build, it was my first Mini-ITX (M-ITX)
          variant, and involved custom modifications drafted in the 3D modelling
          tool Blender.
        </p>
        <motion.ul variants={pageAnimation}>
          <motion.li>Kolink Rocket M-ITX case</motion.li>
          <motion.li>Aorus B450 Pro Wifi ITX</motion.li>
          <motion.li>AMD Ryzen 5 3600</motion.li>
          <motion.li>Asetek 645LT 92mm AIO</motion.li>
          <motion.li>16gb Vulcan T-Force 3000mhz ddr4 RAM</motion.li>
          <motion.li>Nvidia Geforce 1080ti FE</motion.li>
          <motion.li>1.5tb Silicon Power NVME m2 SSD</motion.li>
          <motion.li>Corsair SF600 PSU(with included sleeved cables)</motion.li>
          <motion.li>1 x 92mm, 2 x 120m BeQuiet fans, Deepcool</motion.li>
          <motion.li>4 hub fan controller</motion.li>
        </motion.ul>
        <div className="features-card-default">
          <motion.img
            src={kolink10}
            alt="kolink rocket"
            className="features-card-image"
            variants={scrollRevealRight}
            initial="hidden"
            animate={controls}
            ref={element}
          />
          <div className="features-card-info">
            <h2>Custom handles</h2>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls_1}
              ref={element_1}
            >
              At 12.5 x 32.5 x 32.8cm, 9.6 litre volume (shoebox size) and 5kg -
              this case is travel ready. The added handles increase portability
              and make it easier for those who travel and need their SFF to
              accompany them.
            </motion.p>
            <hr></hr>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls_2}
              ref={element_2}
            >
              Holes drilled through top panel with a drill press, brushed
              stainless steel 10cm D handles attached ~ 1 inch from the edges of
              the case.
            </motion.p>
          </div>
        </div>
        <div className="features-card-default">
          <motion.img
            src={kolink6}
            alt="kolink rocket"
            className="features-card-image-flipped"
            variants={scrollRevealLeft}
            initial="hidden"
            animate={controls2}
            ref={element2}
          />
          <div className="features-card-info-flipped">
            <h2>Custom legs</h2>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls2_1}
              ref={element2_1}
            >
              Legs and tinted acrylic plexi side panels added to hide the
              exhaust fans, improve breathability of the case and provide a more
              stealth look.
            </motion.p>
            <hr></hr>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls2_2}
              ref={element2_2}
            >
              2mm thick aluminium square tubing (4cm x 2cm x 2cm), 18 x 18mm
              square plastic ends inserted at both ends, drilled on top and
              bolted through underside panel of case.
            </motion.p>
            <hr></hr>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls2_3}
              ref={element2_3}
            >
              3mm grey tinted Acrylic plexi (3mm rounded corners) cut to sizes:
              2 x (27.5cm x 3cm), 1 x (9cm x 3cm). Attached with 3M double
              coated tape.
            </motion.p>
          </div>
        </div>
        <div className="features-card-default">
          <motion.img
            src={kolink2}
            alt="kolink rocket"
            className="features-card-image"
            variants={scrollRevealRight}
            initial="hidden"
            animate={controls3}
            ref={element3}
          />
          <div className="features-card-info">
            <h2>Custom fans</h2>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls3_1}
              ref={element3_1}
            >
              Exhaust options were limited in the original design so 80mm holes
              were added to the underside of the case to accomodate two 80mm
              BeQuiet! Pure wings fans.
            </motion.p>
            <hr></hr>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls3_2}
              ref={element3_2}
            >
              The fan exhausts were cut using a 80mm Draper holesaw and a
              further hole for cable management was cut using a coping saw.
            </motion.p>
          </div>
        </div>
        <div className="features-card-default">
          <motion.img
            src={kolink1}
            alt="kolink rocket"
            className="features-card-image-flipped"
            style={{ maxWidth: "60%" }}
            variants={scrollRevealLeft}
            initial="hidden"
            animate={controls4}
            ref={element4}
          />
          <div className="features-card-info-flipped">
            <h2>Solid construction</h2>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls4_1}
              ref={element4_1}
            >
              The titanium-grey anodised aluminium panels and minimalist design
              give the case a premium feel and look. The 2mm thick panels ensure
              your case can handle the day to day wear and tear it may
              encounter. Perforated holes each side mean the CPU and GPU can
              constantly take in cool air.
            </motion.p>
          </div>
        </div>
        <div className="features-card-default">
          <motion.img
            src={kolink5}
            alt="kolink rocket"
            className="features-card-image"
            variants={scrollRevealRight}
            initial="hidden"
            animate={controls5}
            ref={element5}
          />
          <div className="features-card-info">
            <h2>Sandwich style layout</h2>
            <motion.p
              variants={photoAnimation}
              initial="hidden"
              animate={controls5_1}
              ref={element5_1}
            >
              This smart and optimised layout is the most efficient use of space
              and allows the case to support up to 31cm dual slot GPUS, mini-ITX
              motherboards, SFX/SFX-L PSUs and 2 x 2.5" SSDs
            </motion.p>
          </div>
        </div>
      </StyledCustomDesktops>
      <Footer />
      <ScrollToTop />
    </>
  );
};

const StyledCustomDesktops = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  .title-container {
    position: relative;
    margin: 8rem 2rem 2rem 2rem;

    h1 {
      font-size: 8rem;
      font-weight: 900;
      color: white;
      text-shadow: 2px 2px 10px black;
      text-align: center;

      @media (max-width: 800px) {
        font-size: 6rem;
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #ffffff4d;
      border: 2px solid #ffffff4d;
      padding: 3rem;
      border-radius: 50%;
      font-size: 18rem;
      transform: translate(-50%, -50%);
    }
  }

  p {
    width: 50%;
    font-size: 1.5rem;
    padding: 6rem 0rem;
    text-align: center;

    @media (max-width: 800px) {
      width: 80%;
      padding: 3rem 0rem;
    }
  }

  ul {
    font-size: 1.25rem;
    color: white;
    margin: 6rem 2rem;
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 800px) {
      justify-content: flex-start;
      margin: 3rem 1rem;
    }

    li {
      line-height: 2rem;
      margin: 1rem 3rem;
      list-style: circle;
    }
  }

  .features-card-default {
    display: grid;
    margin-bottom: 10rem;
    grid-template-columns: 0 repeat(2, minmax(5rem, 1fr)) 0;
    grid-template-rows: 2fr;

    .features-card-image {
      grid-column: 1/3;
      object-fit: cover;
      width: 100%;
      transform: translateX(-10%);
      justify-self: left;

      @media (max-width: 1200px) {
        grid-column: 1/4;
      }
    }

    .features-card-image-flipped {
      grid-column: 3/4;
      object-fit: cover;
      width: 100%;
      transform: translateX(10%);
      justify-self: right;

      @media (max-width: 1200px) {
        grid-column: 1/4;
      }
    }

    .features-card-info {
      grid-column: 3/4;
      object-fit: cover;
      justify-self: center;
      width: 80%;
      margin-top: 4rem;
      border: 5px solid white;
      padding: 2rem;
      height: fit-content;
      position: relative;

      @media (max-width: 1200px) {
        grid-column: 1/4;
        grid-row: 2/3;
      }

      h2 {
        position: absolute;
        top: 0;
        right: 0;
        border: 5px solid #d9ce23;
        padding: 1rem 1.5rem;
        transform: translate(30px, -70px);
        letter-spacing: 1rem;
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 2rem;
        color: white;
        font-weight: 600;
        letter-spacing: 0.2rem;
        background: #1a1a1a;

        @media (max-width: 1300px) {
          transform: translate(30px, -50px);
        }
      }

      p {
        text-align: left;
        margin: 0;
        width: 100%;
        padding: 2rem;
        /* font-size: 3rem; */
      }
    }

    .features-card-info-flipped {
      grid-column: 1/3;
      grid-row: 1/2;
      object-fit: cover;
      justify-self: center;
      width: 80%;
      margin-top: 4rem;
      border: 5px solid white;
      padding: 2rem;
      height: fit-content;
      position: relative;

      @media (max-width: 1200px) {
        grid-column: 1/4;
        grid-row: 2/3;
      }

      h2 {
        position: absolute;
        top: 0;
        left: 0;
        border: 5px solid #d9ce23;
        padding: 1rem 1.5rem;
        transform: translate(-30px, -70px);
        letter-spacing: 1rem;
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 2rem;
        color: white;
        font-weight: 600;
        letter-spacing: 0.2rem;
        background: #1a1a1a;

        @media (max-width: 1300px) {
          transform: translate(-30px, -50px);
        }
      }

      p {
        text-align: right;
        margin: 0;
        width: 100%;
        padding: 2rem;
        /* font-size: 3rem; */
      }
    }
  }
`;

export default CustomDesktops;
