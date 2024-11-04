import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import Copyright from "../components/Copyright";
import { useRef } from "react";
import "./ViewTask.css";
import TaskList from "../components/TaskList";

const ViewTask = () => {
  const featureColumnRef = useRef(null);

  return (
    <div className="home">
      <Header />
      <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <TaskList />
      </div>
      <Copyright />
    </div>
  );
};

export default ViewTask;
