import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// Images
import kolink10 from "../img/custom-desktops/kolink10.png";
import kolink6 from "../img/custom-desktops/kolink6.png";
import kolink2 from "../img/custom-desktops/kolink2.png";
import kolink1 from "../img/custom-desktops/kolink1.png";
// Components
import Footer from "../components/Footer";

const CustomDesktops = () => {
  return (
    <>
      <StyledCustomDesktops className="intro">
        <h1>Kolink Rocket v4</h1>
        <p>
          Completed in 2019, this is my eighth desktop build to date. It was my
          first M-ITX, and involved custom modifications drafted in the 3D
          modelling tool Blender.
        </p>
        <ul>
          <li>Kolink Rocket M-ITX case</li>
          <li>Aorus B450 Pro Wifi ITX</li>
          <li>AMD Ryzen 5 3600</li>
          <li>Asetek 645LT 92mm AIO</li>
          <li>16gb Vulcan T-Force 3000mhz ddr4 RAM</li>
          <li>Nvidia Geforce 1080ti FE</li>
          <li>1.5tb Silicon Power NVME m2 SSD</li>
          <li>Corsair SF600 PSU(with included sleeved cables)</li>
          <li>1 x 92mm, 2 x 120m BeQuiet fans, Deepcool</li>
          <li>4 hub fan controller</li>
        </ul>
        <div className="features-card-default">
          <img
            src={kolink10}
            alt="kolink rocket"
            className="features-card-image"
          />
          <div className="features-card-info">
            <h2>Custom handles</h2>
            <p>
              At 12.5 x 32.5 x 32.8cm, 9.6 litre volume (shoebox size) and 5kg -
              this case is travel ready. The added handles increase portability
              and make it easier for those who travel and need their SFF to
              accompany them.
            </p>
            <hr></hr>
            <p>
              Holes drilled through top panel with a drill press, brushed
              stainless steel 10cm D handles attached ~ 1 inch from the edges of
              the case.
            </p>
          </div>
        </div>
        <div className="features-card-default">
          <img
            src={kolink6}
            alt="kolink rocket"
            className="features-card-image-flipped"
          />
          <div className="features-card-info-flipped">
            <h2>Custom legs</h2>
            <p>
              Legs and tinted acrylic plexi side panels added to hide the
              exhaust fans, improve breathability of the case and provide a more
              stealth look.
            </p>
            <hr></hr>
            <p>
              2mm thick aluminium square tubing (4cm x 2cm x 2cm), 18 x 18mm
              square plastic ends inserted at both ends, drilled on top and
              bolted through underside panel of case.
            </p>
            <p>
              3mm grey tinted Acrylic plexi (3mm rounded corners) cut to sizes:
              2 x (27.5cm x 3cm), 1 x (9cm x 3cm). Attached with 3M double
              coated tape.
            </p>
          </div>
        </div>
        <div className="features-card-default">
          <img
            src={kolink2}
            alt="kolink rocket"
            className="features-card-image"
          />
          <div className="features-card-info">
            <h2>Custom fans</h2>
            <p>
              Exhaust options were limited in the original design so 80mm holes
              were added to the underside of the case to accomodate two 80mm
              BeQuiet! Pure wings fans.
            </p>
            <hr></hr>
            <p>
              The fan exhausts were cut using a 80mm Draper holesaw and a
              further hole for cable management was cut using a coping saw.
            </p>
          </div>
        </div>
        <div className="features-card-default">
          <img
            src={kolink1}
            alt="kolink rocket"
            className="features-card-image-flipped"
            style={{ maxWidth: "60%" }}
          />
          <div className="features-card-info-flipped">
            <h2>Solid construction</h2>
            <p>
              The titanium-grey anodised aluminium panels and minimalist design
              give the case a premium feel and look. The 2mm thick panels ensure
              your case can handle the day to day wear and tear it may
              encounter. Perforated holes each side mean the CPU and GPU can
              constantly take in cool air.
            </p>
          </div>
        </div>
        <div className="features-card-default">
          <img
            src={kolink2}
            alt="kolink rocket"
            className="features-card-image"
          />
          <div className="features-card-info">
            <h2>Sandwich style layout</h2>
            <p>
              This smart and optimised layout is the most efficient use of space
              and allows the case to support up to 31cm dual slot GPUS, mini-ITX
              motherboards, SFX/SFX-L PSUs and 2 x 2.5" SSDs
            </p>
          </div>
        </div>
      </StyledCustomDesktops>
      <Footer />
    </>
  );
};

const StyledCustomDesktops = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* padding: 8rem; */

  h1 {
    font-size: 8rem;
    font-weight: lighter;
    color: white;
    text-shadow: 2px 2px 10px black;
    text-align: center;
    margin-top: 8rem;
  }

  p {
    width: 50%;
    font-size: 1.5rem;
  }

  ul {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 10rem;

    li {
      line-height: 2rem;
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
        border: 5px solid #5d9716;
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
      }

      p {
        text-align: left;
        margin: 0;
        width: 100%;
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
        border: 5px solid #5d9716;
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
      }

      p {
        text-align: right;
        margin: 0;
        width: 100%;
        /* font-size: 3rem; */
      }
    }
  }
`;

export default CustomDesktops;
