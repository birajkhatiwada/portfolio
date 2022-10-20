import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import svg from "./images/coding.svg";

const Home = (props) => {
  return (
    <div id="firstPageRef" className="firstPage">
      {/* <AnimatedCursor
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
        ></AnimatedCursor> */}
      <div className="aboutMe">
        <div className="aboutMe2">
          <Parallax speed={10}>
            {" "}
            <div className="aboutMeComp hiMyName">hi! I am</div>
          </Parallax>

          <Parallax speed={7}>
            <div className="aboutMeComp aboutMeMyName">BIRAJ KHATIWADA</div>
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
            {"{"} Software Engineer
          </div>
          <div className="aboutMeComp aboutMeWebDeveloper">
            Web Developer {"}"}
          </div>
        </div>
      </div>
      <Parallax speed={-15}>
        <div className="avatarContainer">
          <img className="avatar" src={svg}></img>
          {/* <div className="insideAvatar"></div> */}
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
