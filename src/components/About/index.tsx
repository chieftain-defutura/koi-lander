import React from "react";
import "./About.scss";
import { AboutData } from "../../data/aboutData";

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <div className="mx">
        <div className="background-img">
          {AboutData.map((f, index) => {
            return (
              <div key={index} className="about-container">
                <div className="image">
                  <img src={f.image} alt="" />
                </div>
                <div className="about-content">
                  <h1>{f.title}</h1>
                  <p>{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
