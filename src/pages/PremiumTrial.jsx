import Header1 from "../components/Header1";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./PremiumTrial.css";
import Copyright from "../components/Copyright";

const PremiumTrial = () => {
  return (
    <div className="premium-trial">
      <Header1 />
      <Content />
      {/* <Footer
        facebookLogoWhite1="/facebooklogo-white-1@2x.png"
        eXEDIscordBotLogo="/exe-discord-bot-logo-1@2x.png"
        messengerWhite1="/messenger-white-1@2x.png"
        twitterWhite1="/twitter-white-1@2x.png"
        phoneCallWhite1="/phonecall-white-11@2x.png"
        white1="/2751-white-1@2x.png"
        cberTechzoneRemovebgPreview="/cbertechzoneremovebgpreview-1@2x.png"
      /> */}
      <Copyright/>
    </div>
  );
};

export default PremiumTrial;
