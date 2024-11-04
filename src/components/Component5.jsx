import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Component5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/premium-trial", { replace: true });
  };

  return (
    <Button
      className={`component-1 ${className}`}
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
        "&:hover": { background: "#f77f00" },
        width: 220,
        zIndex: 1,
      }}
      onClick={handleClick}
    >
      Go Premium
    </Button>
  );
};

Component5.propTypes = {
  className: PropTypes.string,
};

export default Component5;