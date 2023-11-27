import React, { useState } from "react";
import "./Header.scss";
import { ReactComponent as HeaderLogo } from "../../assets/logo/header-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger-menu.svg";
import HeaderButton from "../../assets/images/Button.png";
import LayoutModule from "../layoutModule";
import ContactUs from "../ContactUs";

interface IHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<IHeader> = ({ setOpen }) => {
  const [active, setActive] = useState(false);
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
          <LayoutModule handleToggle={() => setActive(false)}>
            <ContactUs setActive={setActive} />
          </LayoutModule>
        )}
      </div>
    </div>
  );
};

export default Header;
