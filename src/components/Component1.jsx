import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({ className = "" }) => {
  return (
    <Button
      className={`component-11 ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "24",
        background: "rgba(255, 255, 255, 0.37)",
        borderRadius: "10px",
        "&:hover": { background: "rgba(255, 255, 255, 0.37)" },
        width: 158,
        height: 53,
      }}
    >
      Learn more
    </Button>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
