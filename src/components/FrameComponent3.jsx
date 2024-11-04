import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "./Component4";
import PropTypes from "prop-types";
import "./FrameComponent3.css";
import { Button } from "@mui/material"; 

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const isLoggedIn = !!username;

  const onEXEDIscordBotLogoClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setUsername(null); 
    navigate("/login");
  }, [navigate]);

  return (
    <div className={`frame-div ${className}`}>
      <header className="rectangle-header" />
      <div className="frame-container">
        <div className="frame-group">
          <div className="exe-discord-bot-logo-parent1">
            <img
              className="exe-discord-bot-logo6"
              loading="lazy"
              alt=""
              src="/exe-discord-bot-logo1@2x.png"
              onClick={onEXEDIscordBotLogoClick}
            />
            <div className="frame-wrapper1">
              <div
                className="service-discord-container"
                onClick={onEXEDIscordBotLogoClick}
              >
                <div className="service-discord8">Service Discord</div>
              </div>
            </div>
          </div>
          <div className="component-2-wrapper">
          {isLoggedIn ? (
              <div className="welcome-message">
                <span>Welcome, {username}</span>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            ) : (
              <Component4 /> // Show login button if not logged in
            )}
          </div>
        </div>
      </div>
      <div className="separator1" />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
