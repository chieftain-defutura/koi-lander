import React, { useState } from "react";
import "./ResponsiveHeader.scss";
import DropDown from "../../assets/images/dropdown.png";
import { ReactComponent as CloceIcon } from "../../assets/icons/close-circle.svg";
import UnionTop from "../../assets/images/Union-top.png";
import UnionBottom from "../../assets/images/Union-bottom.png";
import LayoutModule from "../layoutModule";
import ContactUs from "../ContactUs";

interface IResponsiveHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponsiveHeader: React.FC<IResponsiveHeader> = ({ setOpen }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="responsive-header-link">
      <div
        className="close"
        onClick={() => setOpen(false)}
        style={{ cursor: "pointer" }}
      >
        <CloceIcon />
      </div>
      <div className="border"></div>
      <div className="link">
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
      <div className="dropdown">
        <img src={DropDown} alt="" />
      </div>
      {active && (
        <div className="union-top-img-container">
          {/* <div className="union-top-img">
            <img src={UnionTop} alt="" />
          </div> */}
          <LayoutModule handleToggle={() => setActive(false)}>
            <ContactUs setActive={setActive} />
          </LayoutModule>
          {/* <div className="union-bottom-img">
            <img src={UnionBottom} alt="" />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ResponsiveHeader;
