import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Options.css";

const Options = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/premium-trial");
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={`options ${className}`}>
      <div className="options-child" />
      <div className="messenger-twitter-icons-wrapper">
        <div className="messenger-twitter-icons">
          <div className="instruct-container">
            <span className="instruct-content">To upgrade to Premium Bot</span>
            <p className="vnpay-qr-vietinbank">
              <br></br>
              <span className="instruct"><span className="instruct3">1.</span> Launch Smartbanking or any payment application</span><br></br>
              <span className="instruct"><span className="instruct3">2.</span> Scan the QR code; the account name will appear as:</span><br></br>
              <span className="instruct2"><span className="instruct3">➤</span>  NGUYEN PHAN MANH KHAI (KHAI NPM) from CberTechzone, VietinBank.</span><br></br>
              <span className="instruct"><span className="instruct3">3.</span> Enter details:</span>
              <span className="instruct">
                <span className="instruct-bold"> [<span className="instruct-bold2">Your username account, not Discord name</span>] NAP CBRDIS</span>
              </span><br></br>
              <span className="instruct"><span className="instruct3">4.</span> Your payment will be processed within 5 to 10 minutes</span><br></br>
            </p>
          </div>
          <div className="messenger-twitter-icons-inner">
            <div className="frame-parent1">
              <Button
                className="group-button"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "35.5",
                  background: "#f77f00",
                  borderRadius: "9px",
                  "&:hover": { background: "#f77f00" },
                  width: 223,
                  height: 52,
                }}
                onClick={onGroupContainerClick}
              >
                Cancel
              </Button>
              <Button
                className="group-button"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "35.5",
                  background: "#f77f00",
                  borderRadius: "9px",
                  "&:hover": { background: "#f77f00" },
                  width: 223,
                  height: 52,
                }}
                onClick={onContinueClick}
              >
                Return home
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="navigation-child" />
      </div>
      <div className="frame-parent2">
        <img
          className="qr-code-1"
          loading="lazy"
          alt=""
          src="/cropqrcode.jpg"
        />
      </div>
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,
};

export default Options;
