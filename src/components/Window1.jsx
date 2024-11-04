import { useCallback, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton, colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginButtonContainer from "./LoginButtonContainer";
import PropTypes from "prop-types";
import "./Window1.css";

const Window1 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [discord_userid, setDiscordUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <section className={`window ${className}`}>
      <div className="window-child" />
      <div className="content" onClick={onLogoClick}>
        <img
          className="exe-discord-bot-logo"
          loading="lazy"
          alt=""
          src="/exe-discord-bot-logo@2x.png"
        />
      </div>
      <form className="form-container">
        <div className="form">
          <div className="input-fields">
            <h1 className="register1">Register</h1>
          </div>
          <div className="input-rows">
            <TextField
              className="input-containers"
              placeholder="Username"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "34px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className="input-containers"
              placeholder="Discord User Id"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "34px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
              value={discord_userid}
              onChange={(e) => setDiscordUserId(e.target.value)}
            />
            <TextField
              className="input-containers"
              placeholder="Password"
              variant="standard"
              type="password"
              sx={{
                "& .MuiInputBase-root": { height: "34px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              className="input-containers"
              placeholder="Confirm Password"
              type="password"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "34px", fontSize: "24px" },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
        <p style={{
          color: 'yellow',                // Yellow color for the rest of the text
          backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red background
          lineHeight: '1.2',              // Compact line height
          margin: '0',                    // Remove default margin
          padding: '10px',                // Padding for better spacing
          borderRadius: '5px',            // Rounded corners
          fontWeight: 'bold'              // Bold text
        }}>
          <span style={{ color: 'white' }}>⚠️NOTE⚠️:</span> discord user (ex [@janedoe] &gt; janedoe in register page) must be accurate, wrong user made it unable to work correctly
        </p>
        <LoginButtonContainer
          frame2="Register"
          propWidth="282.8px"
          dontHaveAnAccount="Already have an account?"
          register="Login"
          onRegisterTextClick={onLoginTextClick}
          propDisplay="unset"
          propMinWidth="unset"
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          discord_userid={discord_userid}
          isLogin={false}
        />
      </form>

    </section>
  );
};

Window1.propTypes = {
  className: PropTypes.string,
};

export default Window1;
