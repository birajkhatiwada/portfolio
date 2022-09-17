import { useEffect, useState, useRef } from "react";
import "./App.scss";
import ProjectList from "./components/projectsList";
import EmailForm from "./components/emailForm";
import "aos/dist/aos.css";
import svg from "./components/public/22.svg";
import { Link } from "react-scroll";
import Cursor from "react-cursor-follow";
import AnimatedCursor from "react-animated-cursor";
import anime from "animejs/lib/anime.es.js";
import { Parallax } from "react-scroll-parallax";

function App() {
  const [EmailAppClick, setEmailAppClick] = useState(false);
  const [TerminalAppClick, setTerminalAppClick] = useState(true);
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [clickCoord, setClickCoord] = useState({ x: 0, y: 0 });
  const [hidePulsate, setHidePulsate] = useState("flex");
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Aos.init();
    // Aos.refresh();
  }, []);

  let prevMouseXPosition = [];
  let prevMouseYPosition = [];
  const handleMouseMove = (e) => {
    setCoord({ x: e.screenX, y: e.screenY });
    // console.log(coord);
    // prevMouseXPosition.push(coord.x);
    // prevMouseYPosition.push(coord.y);
    // if (prevMouseXPosition.length > 5) {
    //   prevMouseXPosition.shift(0, 1);
    //   prevMouseYPosition.shift(0, 1);
    // }
  };
  const handleOnClick = (e) => {
    setClickCoord({ x: e.screenX, y: e.screenY });
    setHidePulsate("flex");
    // console.log(clickCoord.x, clickCoord.y);
    setTimeout(hideElement, 250);
  };

  function hideElement() {
    setHidePulsate("none");
    // console.log('hereomy');
  }

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const passData = (childData) => {
    if (childData === "email") setEmailAppClick(!EmailAppClick);
    if (childData === "terminal") setTerminalAppClick(!TerminalAppClick);
  };

  const current = new Date();

  function mouseOver() {
    anime({
      targets: ".aboutMeMyName",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true
    });
  }

  const date = `${
    current.getMonth() + 1
  } - ${current.getDate()} - ${current.getFullYear()}`;

  return (
    <div className="App">
      <div
        id="firstPageRef"
        className="firstPage"
        onMouseMove={handleMouseMove}
      >
        {/* <div
          className="clickCSS"
          style={{
            left: clickCoord.x - 12 + 'px',
            top: clickCoord.y - 125 + 'px',
          }}
        ></div> */}
        {/* <div
          className="circle"
          style={{ left: coord.x, top: coord.y - 80 }}
        ></div> */}
        {/* <Cursor hollow={false} pulse={true} color={'white'} duration={0.8} size={30} opacity={0.3}/> */}
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
        {/* <div
          className="sideBar"
          style={{ left: 0, top: coord.y - 80 + 'px' }}
        ></div>
        <div className="left">BIRAJ KHATIWADA</div>
        <div
          className="right sideBar"
          style={{ right: 0, top: coord.y - 80 + 'px' }}
        ></div> */}
        {/* <div className="panel">
          <p className="myName panelComp">K.BIRAJ</p>
          <p className='panelComp panelProjects'>projects</p>
          <p className="date panelComp">{date}</p>
        </div> */}
        {/* <Terminal  terminalAppClick={TerminalAppClick}></Terminal> */}
        {/* <Languages></Languages> */}
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
              <Link
                className="aboutMeComp aboutMeMyName"
                to="projectListRef"
                spy={true}
                smooth={true}
                onMouseOver={mouseOver}
              >
                biraj khatiwada.
              </Link>
            </Parallax>

            {/* <div className='aboutMeComp aboutMeMyName' onClick={scrollToProject}>biraj khatiwada.</div> */}
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

        {/* <div className='svg'></div> */}
        {/* <Avatar
          avatarStyle='Transparent'
          topType='ShortHairShortCurly'
          accessoriesType='Blank'
          hairColor='Black'
          facialHairType='BeardLight'
          facialHairColor='Black'
          clotheType='BlazerShirt'
          eyeType='Default'
          eyebrowType='Default'
          mouthType='Default'
          skinColor='Light'
        /> */}
        {/* <div className="straightLine"></div> */}

        {/* <Dock passData={passData}></Dock> */}
      </div>
      <ProjectList></ProjectList>
      <div id="contactRef" className="emailContainer">
        <EmailForm
          className="emailForm"
          emailAppClick={EmailAppClick}
        ></EmailForm>
      </div>
      {/* <div className='footer'></div> */}
      <div className="footer">
        <div className="footerContainer">
          <div className="designedByContainer">
            <div className="designedBy">Designed and Coded by</div>
            <div className="codedBy">Biraj Khatiwada</div>
            {/* <div className='footerName'>Biraj Khatiwada</div> */}
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
