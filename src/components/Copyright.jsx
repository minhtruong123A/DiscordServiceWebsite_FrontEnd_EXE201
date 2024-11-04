import PropTypes from "prop-types";
import "./Copyright.css";

const Copyright = ({ className = "" }) => {
  const handleButtonClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61566188733735","_blank"); // Thay thế bằng URL bạn muốn
  };

  const handleButtonClick2 = () => {
    window.open("https://www.youtube.com/@CberTechzone","_blank"); // Thay thế bằng URL bạn muốn
  };


  return (
    <footer className={`footer ${className}`}>
      <div className="footer-child" />
      <div className="copyright-2024">
        Copyright © 2024 CberTechzone All Right Reserved
      </div>
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-items">
            <img
              className="facebook-logo-white-1"
              loading="lazy"
              alt=""
              src="/facebooklogo-white-1@2x.png"
              onClick={handleButtonClick}
            />
            <div className="logo-container">
              <div className="exe-discord-bot-logo-parent">
                <img
                  className="exe-discord-bot-logo2"
                  alt=""
                  src="/exe-discord-bot-logo-1@2x.png"
                />
                <div className="market-research-presentation-r" />
              </div>
            </div>
          </div>
          <div className="contact-container-parent">
            <div className="contact-container">
              <div className="social-icons">
                <img
                  className="messenger-white-1"
                  loading="lazy"
                  alt=""
                  src="/messenger-white-1@2x.png"
                />
                <img
                  className="twitter-white-1"
                  loading="lazy"
                  alt=""
                  src="/twitter-white-1@2x.png"
                />
                <img
                  className="phone-call-white-1"
                  loading="lazy"
                  alt=""
                  src="/phonecall-white-1@2x.png"
                  onClick={handleButtonClick}
                />
                <img
                  className="white-1-icon"
                  loading="lazy"
                  alt=""
                  src="/2751-white-1@2x.png"
                />
              </div>
            </div>
            <h2 className="service-discord5">Service Discord</h2>
            <div className="company-info">
              <div className="company-container">
                <div className="cbertechzone">CberTechzone</div>
                <div className="company-logo-container">
                  <img
                    className="cbertechzone-removebg-preview-icon"
                    loading="lazy"
                    alt=""
                    src="/cbertechzoneremovebgpreview-1@2x.png"
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

Copyright.propTypes = {
  className: PropTypes.string,
};

export default Copyright;
