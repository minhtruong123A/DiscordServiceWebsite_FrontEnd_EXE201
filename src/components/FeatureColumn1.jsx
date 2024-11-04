import Component2 from "./Component2";
import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FeatureColumn1.css";

const FeatureColumn1 = ({ className = "" }) => {
  return (
    <div className={`feature-column1 ${className}`}>
      <div className="code-details">
        <div className="feature-content">
          <h3 className="code-management2">Code Management</h3>
          <div className="code-paragraph">
            <div className="the-bot-performs">
              The bot performs automated code quality checks, identifies
              potential issues, and suggests improvements. It assists developers
              in maintaining clean and efficient code.
            </div>
            <div className="code-actions">
              <Component2
                propFlex="1"
                propMinWidth="166px"
                propAlignSelf="unset"
              />

            </div>
          </div>
        </div>
      </div>
      <div className="feature-column2">
        <div className="image-container1">
          <div className="image-container-child" />
          <img
            className="image-7-icon"
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <img
          className="complaint-white-1"
          alt=""
          src="/complaint-white-1@2x.png"
        />
      </div>
    </div>
  );
};

FeatureColumn1.propTypes = {
  className: PropTypes.string,
};

export default FeatureColumn1;
