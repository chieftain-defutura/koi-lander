import React from "react";
import "./Header.scss";
import { ReactComponent as HeaderLogo } from "../../assets/logo/header-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger-menu.svg";
import HeaderButton from "../../assets/images/Button.png";

interface IHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<IHeader> = ({ setOpen }) => {
  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <div className="logo">
            <div className="menu" onClick={() => setOpen(true)}>
              <Hamburger />
            </div>
            <div className="koi-logo">
              <HeaderLogo />
            </div>
          </div>
          <div className="header-content">
            <div className="header-link">
              <a href="home">Home</a>
              <a href="aboutus">About us</a>
              <a href="contactus">Contact us</a>
            </div>
            <div className="header-button">
              <img src={HeaderButton} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
