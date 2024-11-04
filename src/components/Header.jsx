import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Component5 from "./Component5";
import Component4 from "./Component4";
import axios from "axios";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedRole = localStorage.getItem("role");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
    const intervalId = setInterval(() => {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      if (refresh_token && storedUsername && storedPassword) {
        axios.post("http://localhost:8000/api/account/login", {
          username: storedUsername,
          password: storedPassword,
        })
          .then(response => {
            const { access_token, refresh_token } = response.data;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
          })
          .catch(() => {
            alert("Session expired. Please log in again.");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("password");
            setIsLoggedIn(false);
            navigate("/login");
          });
      }
    }, 30 * 60 * 1000); // 30 minutes
    return () => clearInterval(intervalId);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear(); // Xóa token và thông tin đăng nhập
    setIsLoggedIn(false);
    navigate("/home");
  };

  const onLogoClick = useCallback(() => {
    navigate("/View-task");
  }, [navigate]);

  const onEXEDIscordBotLogoClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <header className={`header ${className}`}>
      <div className="header-child" />
      <div className="left-header">
        <img
          className="exe-discord-bot-logo1"
          loading="lazy"
          alt=""
          src="/exe-discord-bot-logo1@2x.png"
          onClick={onEXEDIscordBotLogoClick}
        />
        <div className="image-container">
          <h2 className="service-discord">Service Discord</h2>
        </div>
      </div>
      <div className="login-container">
        <div className="component-1-parent">
          <Component5 />
          <div className="login-component">
            {isLoggedIn ? (
              <div className="welcome-message">
                <div className="logo" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <img
                    className="avatar-icon"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <div className="dropdown-item" onClick={onLogoClick}>
                        <span>View task</span>
                      </div>
                      <div className="dropdown-item" onClick={handleLogout}>
                        <span>Log out</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Component4 />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;