import { Button } from "@mui/material";
import Component2 from "./Component2";
import Component1 from "./Component1";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FeatureColumn2.css";



const FeatureColumn2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/premium-trial", { replace: true });
  };

  return (
    <div className={`notifications2 ${className}`}>
      <div className="feature-card1">
        <div className="feature-content1">
          <div className="feature-header">
            <div className="feature-header-child" />
            <img className="image-5-icon" alt="" src="/image-5@2x.png" />
            <img
              className="notification-white-1"
              loading="lazy"
              alt=""
              src="/notification-white-1@2x.png"
            />
          </div>
        </div>
        <div className="feature-description">
          <div className="customization-notification-parent">
            <h3 className="customization-notification2">
              Customization Notification
            </h3>
            <div className="users-can-configure">
              Users can configure personalized notifications based on specific
              events (e.g., successful builds, deployments, errors). The bot
              ensures that relevant information reaches the right people
              promptly.
            </div>
          </div>
          <div className="notification-actions">
            <div className="feature-discord-button">
              <Component2
                propFlex="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
              />
            </div>

          </div>
        </div>
      </div>
      <div className="feature-column3">
        <div className="feature-card2">
          <div className="language-info">
            <h3 className="multiple-languages-support2">
              Multiple Languages Support
            </h3>
            <div className="users-can-configure">
              The bot understands and responds in various programming languages.
              Developers can interact with it using their preferred language,
              enhancing accessibility and usability.
            </div>
            <div className="language-actions">
              <Button
                className="language-actions-child"
                startIcon={<img width="34px" height="34px" src="/crown-3.png" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20px; width: 100%;",
                  fontWeight: "bold",
                  background: "#f77f00",
                  borderRadius: "10px",
                  "&:hover": { background: "#ffdb5b" },
                  height: 53,
                }}
                onClick={handleClick}
              >
                Go Premium
              </Button>

            </div>
          </div>
        </div>
        <div className="language-icon">
          <div className="feature-card3">
            <div className="feature-card-child" />
            <div className="feature-content2">
              <img
                className="feature-content-child"
                alt=""
                src="/group-14@2x.png"
              />
              <img
                className="feature-content-item"
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
              <img
                className="feature-content-inner"
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
              <div className="rectangle-div" />
              <div className="feature-content-child1" />
              <div className="service-discord2">Service Discord</div>
              <div className="service-discord3">Service Discord</div>
            </div>
          </div>
          <img
            className="language-white-1"
            loading="lazy"
            alt=""
            src="/language-white-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FeatureColumn2.propTypes = {
  className: PropTypes.string,
};

export default FeatureColumn2;
