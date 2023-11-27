import React from "react";
import { ReactComponent as FooterBgImg } from "../../assets/images/footer-bg-img.svg";
import { ReactComponent as FooterLogo } from "../../assets/logo/footer-logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/insta.svg";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import ResponsiveFooterLogo from "../../assets/images/responsive.png";
import InstaImg from "../../assets/icons/insta.png";
import FaceBookImg from "../../assets/icons/facebook.png";
import TwitterImg from "../../assets/icons/twitter.png";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="mx">
          <div className="footer-container">
            <div className="footer-border-bg-img">
              <div className="footer-background-image">
                <FooterBgImg />
              </div>

              <div className="footer-content">
                <div className="footer-logo">
                  <FooterLogo />
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="copyright">
                  <h4>Copyright © 2022 Sprin Verse ® All right reserved</h4>
                </div>
                <div className="social-media-icons">
                  <InstaIcon />
                  <FaceBookIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive">
        <div className="responsive-img">
          <div className="responsive-container">
            <div className="footer-logo-responsive">
              <img src={ResponsiveFooterLogo} alt="" />
            </div>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-media-icons">
              <img src={InstaImg} alt="" />
              <img src={FaceBookImg} alt="" />
              <img src={TwitterImg} alt="" />
            </div>
            <div className="copyright-responsive">
              <h4>Copyright © 2022 Sprin Verse ® All right reserved</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
