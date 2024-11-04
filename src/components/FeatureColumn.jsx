import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Component2 from "./Component2";
import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FeatureColumn.css";

const FeatureColumn = ({ className = "" }) => {
  return (
    <div className={`feature-column ${className}`}>
      <div className="feature-card">
        <div className="system-details">
          <div className="system-info">
            <div className="title-container">
              <div className="title-container-child" />
              <div className="image-10-parent">
                <img className="image-10-icon" alt="" src="/image-10@2x.png" />
                <img
                  className="frame-inner"
                  loading="lazy"
                  alt=""
                  src="/group-15.svg"
                />
                <TextField
                  className="frame-textfield"
                  placeholder="Service Discord"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "33px",
                      backgroundColor: "#37393f",
                      borderRadius: "0px 0px 0px 0px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                    width: "323px",
                  }}
                />
              </div>
            </div>
            <img
              className="check-white-1"
              loading="lazy"
              alt=""
              src="/check-white-1@2x.png"
            />
          </div>
        </div>
        <div className="support-description">
          <div className="support-content">
            <h3 className="project-management-support2">
              Project Management Support System
            </h3>
            <div className="the-bot-monitors">
              The bot monitors Git repositories and provides real-time updates
              on changes, commits, pull requests, and issues. It helps
              developers stay informed about their codebase.
            </div>
          </div>
          <div className="feature-buttons">
            <Component2
              propFlex="1"
              propMinWidth="166px"
              propAlignSelf="unset"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

FeatureColumn.propTypes = {
  className: PropTypes.string,
};

export default FeatureColumn;
