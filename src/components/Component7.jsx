import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Component7.css";

const Component7 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");


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

  return (
    <Button
      className={`component-2 ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "20",
        background: "#3abef9",
        borderRadius: "10px",
        "&:hover": { background: "#3abef9" },
        height: 49,
      }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

Component7.propTypes = {
  className: PropTypes.string,
};

export default Component7;
