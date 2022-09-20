import "./App.scss";
import ProjectList from "./components/projectsList";
import EmailForm from "./components/emailForm";
import "aos/dist/aos.css";
import svg from "./components/public/22.svg";
import { Link } from "react-scroll";
import AnimatedCursor from "react-animated-cursor";
import { Parallax } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <div id="firstPageRef" className="firstPage">
        <AnimatedCursor
          color="255,255,255"
          innerSize={5}
          outerSize={35}
          innerScale={0}
          outerScale={1.2}
          outerAlpha={0.2}
          outerStyle={{
            color: "red",
            border: "2px solid #000000"
          }}
        ></AnimatedCursor>
        <div className="linksContainer">
          <div className="linkLine"></div>
          <Link
            className="projectLink"
            to="contactRef"
            spy={true}
            smooth={true}
          >
            CONTACT
          </Link>
          <Link
            className="projectLink"
            to="projectRef"
            spy={true}
            smooth={true}
          >
            PROJECT
          </Link>
          <Link
            className="projectLink"
            to="firstPageRef"
            spy={true}
            smooth={true}
          >
            HOME
          </Link>
        </div>
        <div className="fixedEmailContainer">
          <div className="linkLineEmail"></div>
          <div className="fixedEmailLink">khatiwadabiraj10@gmail.com</div>
        </div>
        <div className="aboutMe">
          <div className="aboutMe2">
            <Parallax speed={10}>
              {" "}
              <div className="aboutMeComp hiMyName">hi! I am</div>
            </Parallax>

            <Parallax speed={7}>
              <div className="aboutMeComp aboutMeMyName">biraj khatiwada.</div>
            </Parallax>

            <Parallax speed={5}>
              {" "}
              <div className="aboutMeComp aboutMeDescription">
                I enjoy desiging and creating, whether it's art or computer
                programming. Both allow me to turn a small idea into an entire
                work of art. Separately, computer programming allows me to
                joyfully explore my interest in problem solving.
              </div>
            </Parallax>

            <div className="aboutMeComp aboutMeSoftwareEngineer">
              Software Engineer
            </div>
            <div className="aboutMeComp aboutMeWebDeveloper">Web Developer</div>
          </div>
        </div>
        <Parallax speed={-15}>
          <div className="avatarContainer">
            <img className="avatar" src={svg}></img>
          </div>
        </Parallax>
      </div>
      <ProjectList></ProjectList>
      <div id="contactRef" className="emailContainer">
        <EmailForm className="emailForm"></EmailForm>
      </div>

      <div className="footer">
        <div className="footerContainer">
          <div className="designedByContainer">
            <div className="designedBy">Designed and Coded by</div>
            <div className="codedBy">Biraj Khatiwada</div>
          </div>
          <div className="copyrightContainer">
            <div>©2022 Copyright</div>
            <div className="emeryville">Emeryville</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
