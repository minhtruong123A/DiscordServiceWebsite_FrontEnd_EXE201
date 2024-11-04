import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginButtonContainer from "./LoginButtonContainer";
import PropTypes from "prop-types";
import "./LogoContainer.css";

const LogoContainer = ({ className = "" }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <section className={`logo-container1 ${className}`}>
      <div className="logo-container-child" />
      <div className="exe-discord-bot-logo-wrapper" onClick={onLogoClick}>
        <img
          className="exe-discord-bot-logo3"
          loading="lazy"
          alt=""
          src="/exe-discord-bot-logo@2x.png"
        />
      </div>
      <div className="login-fields">
        <div className="username-field">
          <h1 className="login1">Login</h1>
        </div>
        <div className="password-input">
          <TextField
            className="input-containers"
            placeholder="Username"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              "& .MuiInputBase-root": { height: "34px", fontSize: "24px" },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          <TextField
            className="password-field"
            placeholder="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiInputBase-root": { height: "34px", fontSize: "24px" },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          {/* <div className="forgot-password">
            <div className="forgot-password1">Forgot password?</div>
          </div> */}
        </div>
        <LoginButtonContainer
          frame2="Login"
          dontHaveAnAccount="Don’t have an account?"
          register="Register"
          onRegisterTextClick={onRegisterTextClick}
          username={username}
          password={password}
          isLogin={true}
        />
      </div>
    </section>
  );
};

LogoContainer.propTypes = {
  className: PropTypes.string,
};

export default LogoContainer;
