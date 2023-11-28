import React, { useState } from "react";
import "./ResponsiveHeader.scss";
import DropDown from "../../assets/images/dropdown.png";
import { ReactComponent as CloceIcon } from "../../assets/icons/close-circle.svg";
import ContactUs from "../ContactUs";

interface IResponsiveHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const ResponsiveHeader: React.FC<IResponsiveHeader> = ({ setOpen, open }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={
        open ? "responsive-header-link active" : "responsive-header-link"
      }
    >
      <div
        className="close"
        onClick={() => setOpen(false)}
        style={{ cursor: "pointer" }}
      >
        <CloceIcon />
      </div>
      <div className="border"></div>
      <div className="link">
        <div onClick={() => setOpen(false)}>
          <a href="/">Home</a>
        </div>
        <div onClick={() => setOpen(false)}>
          <a href="/">About us</a>
        </div>
        <div onClick={() => [setActive(true), setOpen(false)]}>
          <p>Contact us</p>
        </div>
      </div>
      <div className="dropdown">
        <img src={DropDown} alt="" />
      </div>
      {active && <ContactUs setActive={setActive} />}
    </div>
  );
};

export default ResponsiveHeader;
