import React from "react";
import "./ResponsiveHeader.scss";
import DropDown from "../../assets/images/dropdown.png";
import { ReactComponent as CloceIcon } from "../../assets/icons/close-circle.svg";

interface IResponsiveHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponsiveHeader: React.FC<IResponsiveHeader> = ({ setOpen }) => {
  return (
    <div className="responsive-header-link">
      <div className="close" onClick={() => setOpen(false)}>
        <CloceIcon />
      </div>
      <div className="link">
        <a href="home">Home</a>
        <a href="aboutus">About us</a>
        <a href="contactus">Contact us</a>
      </div>
      <div className="dropdown">
        <img src={DropDown} alt="" />
      </div>
    </div>
  );
};

export default ResponsiveHeader;
