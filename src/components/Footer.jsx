import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  facebookLogoWhite1,
  eXEDIscordBotLogo,
  messengerWhite1,
  twitterWhite1,
  phoneCallWhite1,
  white1,
  cberTechzoneRemovebgPreview,
  propMargin,
  socialLinksMinWidth,
  frameDivWidth,
  companyInfoWidth,
}) => {
  const serviceDiscordStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const socialLinksStyle = useMemo(() => {
    return {
      minWidth: socialLinksMinWidth,
    };
  }, [socialLinksMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const companyInfoStyle = useMemo(() => {
    return {
      width: companyInfoWidth,
    };
  }, [companyInfoWidth]);

  return (
    <footer className={`footer1 ${className}`}>
  <div className="copyright-20241">
    Copyright 2024 CberTechzone All Right Reserved
  </div>
  <div className="social-links" style={socialLinksStyle}>
        <div className="social-icons1">
          <div className="facebook-link-wrapper">
            <div className="facebook-link">
              <img
                className="facebook-logo-white-11"
                loading="lazy"
                alt=""
                src={facebookLogoWhite1}
              />
              <div className="exe-discord-bot-logo-container">
                <img
                  className="exe-discord-bot-logo5"
                  alt=""
                  src={eXEDIscordBotLogo}
                />
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-icons">
                <img
                  className="messenger-white-11"
                  loading="lazy"
                  alt=""
                  src={messengerWhite1}
                />
                <img
                  className="twitter-white-11"
                  loading="lazy"
                  alt=""
                  src={twitterWhite1}
                />
                <div className="phone-call-white-1-wrapper">
                  <img
                    className="phone-call-white-11"
                    loading="lazy"
                    alt=""
                    src={phoneCallWhite1}
                  />
                </div>
                <div
                  className="phone-call-white-1-wrapper"
                  style={frameDivStyle}
                >
                  <img
                    className="white-1-icon1"
                    loading="lazy"
                    alt=""
                    src={white1}
                  />
                </div>
              </div>
            </div>
            <h3 className="service-discord7" style={serviceDiscordStyle}>
              Service Discord
            </h3>
            <div className="company-info1" style={companyInfoStyle}>
              <div className="company-name">
                <div className="cbertechzone1">CberTechzone</div>
                <div className="company-logo">
                  <img
                    className="cbertechzone-removebg-preview-icon1"
                    loading="lazy"
                    alt=""
                    src={cberTechzoneRemovebgPreview}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  facebookLogoWhite1: PropTypes.string,
  eXEDIscordBotLogo: PropTypes.string,
  messengerWhite1: PropTypes.string,
  twitterWhite1: PropTypes.string,
  phoneCallWhite1: PropTypes.string,
  white1: PropTypes.string,
  cberTechzoneRemovebgPreview: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
  socialLinksMinWidth: PropTypes.any,
  frameDivWidth: PropTypes.any,
  companyInfoWidth: PropTypes.any,
};

export default Footer;
