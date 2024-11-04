import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Component6.css";

const Component6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const accessToken = localStorage.getItem("access_token"); // Lấy access_token từ localStorage
    if (accessToken) {
      // Nếu access_token tồn tại, tức là người dùng đã đăng nhập
      navigate("/payment");
    } else {
      // Nếu không, chuyển hướng tới trang đăng nhập
      navigate("/login");
    }
  };

  return (
    <Button
      className={`component-6 ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "30px; width: 100%; height: 100px;",
        fontWeight: "bold",
        background: "#f77f00",
        borderRadius: "50px",
        "&:hover": { background: "#f77f00" },
        height: 89,
      }}
      onClick={handleClick}
    >
      Go Monthly
    </Button>
  );
};

Component6.propTypes = {
  className: PropTypes.string,
};

export default Component6;