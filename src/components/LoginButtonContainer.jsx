import { useMemo, useCallback, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./LoginButtonContainer.css";

const LoginButtonContainer = ({
  className = "",
  frame2,
  username,
  password,
  confirmPassword,
  discord_userid,
  propWidth,
  dontHaveAnAccount,
  register,
  onRegisterTextClick,
  propDisplay,
  propMinWidth,
  isLogin = true,
}) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const registerPromptStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const registerStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  // const onRegisterTextClick1 = useCallback(() => {
  //   navigate("/register");
  // }, [navigate]);

  const handleSubmit = async () => {
    if (isLogin) {
      // Handle login
      if (!username || !password) {
        setError("Username and Password cannot be empty");
        return;
      }

      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      try {
        const response = await axios.post("https://exe202backend-ppn5.onrender.com/api/account/login", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.access_token) {
          const { access_token, refresh_token, username, role } = response.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          localStorage.setItem("username", username);
          localStorage.setItem("role", role);
          localStorage.setItem("password", password);

          setTimeout(() => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("password");
            alert("Session expired. Please log in again.");
            navigate("/login");
          }, 30 * 60 * 1000);

          if (role === 1) {
            navigate("/home");
          } else if (role === 2) {
            navigate("/admin");
          } else {
            setError("Invalid role. Please contact support.");
          }
        } else {
          setError(response.data.error || "Login failed");
        }
      } catch (error) {
        setError("Failed to connect to server. Please try again.");
      }
    } else {
      // Handle registration
      if (!username || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        setError("Confirm password does not match password.");
        return;
      }

      // Assuming you have `confirmPassword` and `discord_userid` passed to the component as well
      const formData = {
        username,
        password,
        confirm_password: password, // Update this if you have a separate confirm password state
        discord_userid, // Update this with the actual value
      };

      try {
        const response = await axios.post("https://exe202backend-ppn5.onrender.com/api/account/register", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data.success) {
          navigate("/login"); // Redirect to login after successful registration
        } else {
          setError(response.data.error || "Registration failed");
        }
      } catch (error) {
        setError("Failed to connect to server. Please try again.");
      }
    }
  };

  return (
    <div className={`login-button-container ${className}`}>
      {error && <div className="error-message">{error}</div>}
      <Button
        className="login-button-container-child"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "35.5",
          background: "#3abef9",
          borderRadius: "20px",
          "&:hover": { background: "#3abef9" },
          height: 52,
        }}
        onClick={handleSubmit}
      >
        {frame2}
      </Button>
      <div className="registration">
        <div className="register-prompt" style={registerPromptStyle}>
          <div className="dont-have-an">{dontHaveAnAccount}</div>
          <b
            className="register2"
            onClick={onRegisterTextClick}
            // onClick={() => navigate("/login")}
            style={registerStyle}
          >
            {register}
          </b>
        </div>
      </div>
    </div>
  );
};

LoginButtonContainer.propTypes = {
  className: PropTypes.string,
  frame2: PropTypes.string,
  dontHaveAnAccount: PropTypes.string,
  register: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  isLogin: PropTypes.bool,

  /** Action props */
  onRegisterTextClick: PropTypes.func,
  username: PropTypes.string,  // Add prop types for username
  password: PropTypes.string,  // Add prop types for password
  confirmPassword: PropTypes.string, // Add prop types for confirmPassword
  discord_userid: PropTypes.string, // Add prop types for discord_userid
};

export default LoginButtonContainer;
