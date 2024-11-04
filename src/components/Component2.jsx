import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Component2.css";

const Component2 = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const component9Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const handleButtonClick = () => {
    window.open("https://discord.com/oauth2/authorize?client_id=1242145647381970975&permissions=8&integration_type=0&scope=bot","_blank"); // Thay thế bằng URL bạn muốn
  };

  return (
    <Button
      className={`component-9 ${className}`}
      startIcon={<img width="49px" height="49px" src="/discord-icon-1-4.png" />}
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
        height: 53,
      }}
      style={component9Style}
      onClick={handleButtonClick}
    >
      Add to Discord
    </Button>
  );
};

Component2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Component2;
