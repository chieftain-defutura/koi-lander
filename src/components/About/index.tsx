import React from "react";
import { AboutData } from "../../data/aboutData";
import RectangleImg from "../../assets/images/Rectangle.png";
import Arrow from "../../assets/images/arrow.png";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <div className="mx">
        <div className="rectangle-img">
          <img src={RectangleImg} alt="" />
        </div>
        <div>
          <div className="border-radius"></div>
          <div className="arrow-img">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="background-img">
          <div>
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
    </div>
  );
};

export default About;
