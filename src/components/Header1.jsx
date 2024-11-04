import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "./Component4";
import PropTypes from "prop-types";
import "./Header1.css";
import { Button } from "@mui/material";

const Header1 = ({ className = "" }) => {
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
    setUsername(null); // Update state
    navigate("/login");
  }, [navigate]);

  return (
    <header className={`header1 ${className}`}>
      <div className="rectangle-container">
        <div className="frame-child2" />
        <div className="exe-discord-bot-logo-group">
          <img
            className="exe-discord-bot-logo4"
            loading="lazy"
            alt=""
            src="/exe-discord-bot-logo1@2x.png"
            onClick={onEXEDIscordBotLogoClick}
          />
          <div className="frame-wrapper">
            <div
              className="service-discord-wrapper"
              onClick={onEXEDIscordBotLogoClick}
            >
              <h3 className="service-discord6">Service Discord</h3>
            </div>
          </div>
        </div>
        <div className="login-component1">
        {isLoggedIn ? (
              <div className="welcome-message">
                <Button
                  className="logout-button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20px; width: 100%;",
                    fontWeight: "bold",
                    background: "#3abef9",
                    borderRadius: "10px",
                    "&:hover": { background: "#3abef9" },
                    height: 49,
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                {/* <br></br>
                <span className="welcome-user">Welcome, {username}</span> */}
              </div>
              
            ) : (
              <Component4 />
            )}
        </div>
      </div>
      <div className="separator" />
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
