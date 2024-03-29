import "./projectsList.css";
import { Parallax } from "react-scroll-parallax";
import Projects from "./projects";

const ProjectList = (props) => {
  return (
    <>
      <div id="projectRef" className="outerProjectsContainer">
        <div className="projectsContainer">
          <div className="projectsTitle">
            <div className="projectsTitleBar">Projects</div>
          </div>
          <div className="projectsCenterDiv">
            <Projects></Projects>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
