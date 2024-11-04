import Component2 from "./Component2";
import Component3 from "./Component3";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" , onAboutServiceClick }) => {
  return (
    <section className={`welcome-content-wrapper ${className}`}>
      <div className="welcome-content">
        <div className="welcome-content-child" />
        <h1 className="welcome-to-service-container">
          <span>
            <p className="welcome-to">Welcome to</p>
            <p className="welcome-to">Service Discord</p>
          </span>
        </h1>
        <div className="content-columns">
          <div className="button-row">
            <Component2
              propFlex="1"
              propMinWidth="166px"
              propAlignSelf="unset"
            />
            <Component3 onClick={onAboutServiceClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  onAboutServiceClick: PropTypes.func.isRequired,
};

export default FrameComponent;
