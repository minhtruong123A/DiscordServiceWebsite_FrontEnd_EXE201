import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import FeatureColumn from "../components/FeatureColumn";
import FeatureColumn1 from "../components/FeatureColumn1";
import FeatureColumn2 from "../components/FeatureColumn2";
import FrameComponent1 from "../components/FrameComponent1";
import Copyright from "../components/Copyright";
import { useRef } from "react";
import "./Home.css";

const Home = () => {
  const featureColumnRef = useRef(null);
  const scrollToFeatureColumn = () => {
    featureColumnRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <img
        className="exe-mascot1-icon"
        loading="lazy"
        alt=""
        src="/exe-mascot1@2x.png"
      />
      <Header />
      <FrameComponent onAboutServiceClick={scrollToFeatureColumn} />
      <section className="features">
        <div className="feature-list">
          <div ref={featureColumnRef}>
            <FeatureColumn />
          </div>
          <FeatureColumn1 />
          <FeatureColumn2 />
        </div>
      </section>
      <FrameComponent1 />
      <Copyright />
    </div>
  );
};

export default Home;
