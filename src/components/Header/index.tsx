import React, { useState } from "react";
import { ReactComponent as HeaderLogo } from "../../assets/logo/header-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger-menu.svg";
import HeaderButton from "../../assets/images/Button.png";
import ContactUs from "../ContactUs";
import ResponsiveHeader from "../ResponsiveHeader";
import "./Header.scss";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <div className="logo">
            <div
              className="menu"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <Hamburger />
            </div>
            <div className="koi-logo">
              <HeaderLogo />
            </div>
          </div>
          <div className="header-content">
            <div className="header-link">
              <div>
                <a href="/">Home</a>
              </div>
              <div>
                <a href="/">About us</a>
              </div>
              <div onClick={() => setActive(true)}>
                <p>Contact us</p>
              </div>
            </div>
            <div className="header-button">
              <img src={HeaderButton} alt="" />
            </div>
          </div>
        </div>
        {active && (
          <div className="union-top-img-container">
            <ContactUs setActive={setActive} />
          </div>
        )}
        <ResponsiveHeader setOpen={setOpen} open={open} />
      </div>
    </div>
  );
};

export default Header;
