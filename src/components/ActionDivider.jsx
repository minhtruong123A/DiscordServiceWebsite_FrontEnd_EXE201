import Options from "./Options";
import PropTypes from "prop-types";
import "./ActionDivider.css";

const ActionDivider = ({ className = "" }) => {
  return (
    <section className={`action-divider ${className}`}>
      <div className="login-component-parent">
        <div className="login-component2">
          <b className="payment-method">Payment method</b>
        </div>
        <Options />
      </div>
    </section>
  );
};

ActionDivider.propTypes = {
  className: PropTypes.string,
};

export default ActionDivider;
