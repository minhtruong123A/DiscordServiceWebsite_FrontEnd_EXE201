import Component6 from "./Component6";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="trial-info-parent">
        <div className="trial-info">
          <div className="trial-header">
            <h1 className="premium-trial1">Premium Trial</h1>
          </div>
          <div className="get-5-days">{`Get 5 days free trial by become the first person to purchase premium `}</div>
        </div>
        <div className="plan-details">
          <div className="plan-options">
            <div className="plan-options-child" />
            <div className="monthly-option">
              <div className="monthly-info">
                <div className="monthly-pricing">
                  <div className="monthly-type">
                    <h1 className="monthly">Monthly</h1>
                  </div>
                  <b className="sale-499-monthly-container">
                    <p className="sale">
                      <span>{`0.99$ `}</span>
                      <span className="monthly2">/monthly</span>
                    </p>
                  </b>
                </div>
              </div>
              <div className="data-storage-calculate-container">
                <ul className="data-storage-calculate-statis">
                  <li className="data-storage">Data storage</li>
                  <li>Multiple Languages Support</li>
                </ul>
              </div>
            </div>
            <div className="monthly-button">
              <Component6 />
            </div>
            <img
              className="star-1-icon"
              loading="lazy"
              alt=""
              src="/star-1@2x.png"
            />
            <img
              className="crown-4-icon"
              loading="lazy"
              alt=""
              src="/crown-4@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
