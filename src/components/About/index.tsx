import React, { useRef, useState } from "react";
import { AboutData } from "../../data/aboutData";
import RectangleImg from "../../assets/images/Rectangle.png";
import Arrow from "../../assets/images/arrow.png";
import "./About.scss";

const About: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const handleArrowClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about-wrapper">
      <div className="mx">
        <div className="rectangle-img">
          <img src={RectangleImg} alt="" />
        </div>
        <div onClick={handleArrowClick}>
          <div className="border-radius"></div>
          <div className="arrow-img">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div
          className={`background-img ${expanded ? "expanded" : "add"}`}
          // className="background-img"
          ref={backgroundRef}
          style={{
            height: expanded
              ? `${backgroundRef.current?.scrollHeight}px`
              : "480px",
            transition: "all 0.5s ease-out",
          }}
        >
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
