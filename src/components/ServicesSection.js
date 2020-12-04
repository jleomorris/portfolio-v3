import React from "react";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description"></div>
      <h2>
        <span>Always improving</span> my skills
      </h2>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="teamwork icon" />
            <h3>Team player</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
            accusantium.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="teamwork icon" />
            <h3>Experience collaborating with teams</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel!
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="teamwork icon" />
            <h3>Keen eye for UI and UX design</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            magni.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="teamwork icon" />
            <h3>Always willing to learn new skills</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            saepe.
          </p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home icon" />
      </div>
    </div>
  );
};

export default ServicesSection;
