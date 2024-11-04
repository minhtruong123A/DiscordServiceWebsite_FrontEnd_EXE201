import Component2 from "./Component2";
import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`document-container-wrapper ${className}`}>
      <div className="document-container">
        <div className="document-top-wrapper">
          <div className="document-top">
            <div className="document-top-child" />
            <div className="document-icon-row">
              <img className="image-8-icon" alt="" src="/image-8@2x.png" />
              <div className="rectangle-group">
                <div className="frame-child1" />
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group-13.svg"
                />
              </div>
              <div className="document-title-wrapper">
                <div className="document-title">
                  <div className="document-icon" />
                  <div className="service-discord4">Service Discord</div>
                </div>
              </div>
            </div>
            <img
              className="document-white-1"
              loading="lazy"
              alt=""
              src="/document-white-1@2x.png"
            />
          </div>
        </div>
        <div className="document-description">
          <div className="description-container">
            <h3 className="document-coding2">Document - Coding Resources</h3>
            <div className="provides-a-curated">
              Provides a curated collection of coding resources, tutorials, and
              best practices. It serves as a knowledge hub for developers,
              helping them learn and improve their skills.
            </div>
          </div>
          <div className="document-action-row">
            <Component2 />

          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
