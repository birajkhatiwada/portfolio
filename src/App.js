import { useEffect, useState } from 'react';
import './App.scss';
import ProjectList from './components/projectsList';
import EmailForm from './components/emailForm';
import Terminal from './components/terminal';
import Languages from './components/languages';
import Dock from './components/dock';
import ScrollAnimation from 'react-animate-on-scroll';
import {motion} from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [EmailAppClick, setEmailAppClick] = useState(false);
  const [TerminalAppClick, setTerminalAppClick] = useState(true);
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [clickCoord, setClickCoord] = useState({ x: 0, y: 0 });
  const [hidePulsate, setHidePulsate] = useState('flex');

  useEffect(()=>{
    // Aos.init();
    // Aos.refresh();
  }, []);


  let prevMouseXPosition = [];
  let prevMouseYPosition = [];
  const handleMouseMove = (e) => {
    setCoord({ x: e.screenX, y: e.screenY });
    console.log(coord);
    prevMouseXPosition.push(coord.x);
    prevMouseYPosition.push(coord.y);
    if (prevMouseXPosition.length > 5) {
      prevMouseXPosition.shift(0, 1);
      prevMouseYPosition.shift(0, 1);
    }
  };
  const handleOnClick = (e) => {
    setClickCoord({ x: e.screenX, y: e.screenY });
    setHidePulsate('flex');
    console.log(clickCoord.x, clickCoord.y);
    setTimeout(hideElement, 250);
  };

  function hideElement() {
    setHidePulsate('none');
    console.log('hereomy');
  }

  const passData = (childData) => {
    if (childData === 'email') setEmailAppClick(!EmailAppClick);
    if (childData === 'terminal') setTerminalAppClick(!TerminalAppClick);
  };

  const current = new Date();

  const date = `${
    current.getMonth() + 1
  } - ${current.getDate()} - ${current.getFullYear()}`;

  return (
    <div className="App">
      <div className="firstPage" onMouseMove={handleMouseMove}>
        <div
          className="clickCSS"
          style={{
            left: clickCoord.x - 12 + 'px',
            top: clickCoord.y - 125 + 'px',
          }}
        ></div>
        <div
          className="circle"
          style={{ left: coord.x + 'px', top: coord.y - 80 + 'px' }}
        ></div>
        <div
          className="sideBar"
          style={{ left: 0, top: coord.y - 80 + 'px' }}
        ></div>
        <div className="left">BIRAJ KHATIWADA</div>
        <div
          className="right sideBar"
          style={{ right: 0, top: coord.y - 80 + 'px' }}
        ></div>
        {/* <div className="panel">
          <p className="myName panelComp">K.BIRAJ</p>
          <p className='panelComp panelProjects'>projects</p>
          <p className="date panelComp">{date}</p>
        </div> */}
        {/* <Terminal  terminalAppClick={TerminalAppClick}></Terminal> */}
        <Languages></Languages>
        <div className='aboutMe'>
          <div className='aboutMeComp aboutMeMyName'>Biraj Khatiwada</div>
          <div className='aboutMeComp aboutMeSoftwareEngineer'>Software Engineer</div>
          <div className='aboutMeComp aboutMeWebDeveloper'>Web Developer</div>
        </div>
        <div className="straightLine"></div>
        
        
        <Dock passData={passData}></Dock>
      </div>
      <ProjectList></ProjectList>
      <div className="emailContainer">
          <EmailForm
            className="emailForm"
            emailAppClick={EmailAppClick}
          ></EmailForm>
        </div>
      <div className='footer'></div>
      <div className="footer"> Hello </div>
    </div>
  );
}

export default App;
