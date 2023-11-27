import React, { useState } from "react";
import "./Aboutus.scss";
import FirstCircle from "../../assets/images/dim-circle.png";
import SecondCircle from "../../assets/images/glow-circle.png";
import Girl from "../../assets/images/girl.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Data = [
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
];
const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="mx">
        <div className="aboutus-wrapper">
          <div className="aboutus-content">
            <h1>About us</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua."Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <div className="founder-container">
            {Data.map((f, i) => (
              <Card Data={f} key={i} />
            ))}
          </div>
          <Swiper slidesPerView={1} className="founder-wrapper">
            {Data.map((f, i) => (
              <SwiperSlide key={i}>
                <Card Data={f} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

interface ICard {
  Data: {
    image: any;
    title: string;
    name: string;
  };
}

const Card: React.FC<ICard> = ({ Data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`image-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="founders">
        <div>
          <img
            src={isHovered ? SecondCircle : FirstCircle}
            alt=""
            className="transition-image"
          />
        </div>
        <div className="founder-image">
          <img src={Data.image} alt="" />
        </div>
      </div>
      <div className="content">
        <h3>{Data.name}</h3>
        <p>{Data.title}</p>
      </div>
    </div>
  );
};
