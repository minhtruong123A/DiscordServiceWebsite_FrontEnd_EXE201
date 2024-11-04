import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Component3.css";

const Component3 = ({ className = "", onClick }) => {
  return (
    <Button
      className={`component-18 ${className}`}
      disableElevation
      variant="contained"
      onClick={onClick}
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "20px; width: 100%;",
        fontWeight: "bold",
        background: "rgba(255, 255, 255, 0.37)",
        borderRadius: "10px",
        "&:hover": { background: "rgba(255, 255, 255, 0.37)" },
        width: 177,
        height: 53,
      }}
    >
      About service
    </Button>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Component3;
