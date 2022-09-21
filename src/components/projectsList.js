import "./projectsList.css";
import { Parallax } from "react-scroll-parallax";
import Projects from "./projects";

const ProjectList = (props) => {
  return (
    <>
      <div id="projectRef">
        <div className="projectsContainer">
          <div className="projectsTitle">
            <Parallax
              speed={3}
              startScroll={window.innerWidth < 1500 ? 700 : 700}
              endScroll={window.innerWidth < 1500 ? 1000 : 1200}
              scale={[1, 1.5]}
              opacity={[1, 0]}
            >
              <div className="projectsTitleBar">
                {/* <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 800}
                endScroll={window.innerWidth < 1500 ? 1200 : 1700}
                // speed={2}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 10, top: 0 }}
              >
                P
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                translateY={[0, -100]}
                // speed={6}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                R
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                // speed={2}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                O
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                translateY={[0, -100]}
                // speed={6}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                J
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                // speed={2}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                E
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                translateY={[0, -100]}
                // speed={6}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                C
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                // speed={2}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                T
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 700}
                endScroll={window.innerWidth < 1500 ? 1200 : 1500}
                translateY={[0, -100]}
                // speed={6}
                // opacity={[1, 0]}
                rootMargin={{ bottom: 0, top: 50 }}
              >
                S
              </Parallax> */}
                PROJECTS
              </div>
            </Parallax>
          </div>
          <Projects></Projects>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
