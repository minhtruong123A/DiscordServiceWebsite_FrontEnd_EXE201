import FrameComponent3 from "../components/FrameComponent3";
import ActionDivider from "../components/ActionDivider";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Payment.css";
import Copyright from "../components/Copyright";

const Payment = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    if (!username) {
      navigate("/home");
    }
  }, [username, navigate]); 

  return (
    <div className="payment">
      <Header1 />
      <ActionDivider />
      {/* <Footer
        facebookLogoWhite1="/facebooklogo-white-1@2x.png"
        eXEDIscordBotLogo="/exe-discord-bot-logo-1@2x.png"
        messengerWhite1="/messenger-white-1@2x.png"
        twitterWhite1="/twitter-white-1@2x.png"
        phoneCallWhite1="/phonecall-white-11@2x.png"
        white1="/2751-white-1@2x.png"
        cberTechzoneRemovebgPreview="/cbertechzoneremovebgpreview-1@2x.png"
        propMargin="unset"
        socialLinksMinWidth="unset"
        frameDivWidth="unset"
        companyInfoWidth="unset"
      /> */}
      <Copyright/>
    </div>
  );
};

export default Payment;
