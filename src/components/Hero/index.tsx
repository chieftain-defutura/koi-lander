import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Penthahouse from "../../assets/images/penthahouse.png";
import CasinoRoyel from "../../assets/images/casinoroyel.png";
import ECafe from "../../assets/images/ecafe.png";
import ClubPoker from "../../assets/images/clubpoker.png";
import Lounge from "../../assets/images/lounge.png";
import SportsDeck from "../../assets/images/sportsdeck.png";
// import BorderDown from "../../assets/images/borderDown.png";
// import BorderTop from "../../assets/images/borderTop.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface IHero {
  open: boolean;
}

const Images = [Penthahouse, CasinoRoyel, ECafe, ClubPoker, Lounge, SportsDeck];
const Hero: React.FC<IHero> = ({ open }) => {
  return (
    <div style={{ marginTop: open ? "10px" : "115px" }}>
      <div className="mx">
        <div className="hero-wrapper">
          {/* <div className="border">
            <img src={BorderDown} alt="" />
          </div> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Images.map((slide, index) => (
              <SwiperSlide>
                <div key={index} className="slide">
                  <img src={slide} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="border">
            <img src={BorderTop} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
