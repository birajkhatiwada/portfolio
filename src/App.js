import "./App.scss";
import ProjectList from "./components/projectsList";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Navigation from "./components/navigation";
import Home from "./components/home";
import EmailForm from "./components/emailForm";

import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Navigation></Navigation>
        <Home></Home>
        <ProjectList></ProjectList>
        <Experiences></Experiences>
        <Skills></Skills>
        <EmailForm></EmailForm>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

// <div className="linksContainerMain">
//             <div className="linksContainer">
//               <Link
//                 className="projectLink"
//                 to="firstPageRef"
//                 spy={true}
//                 smooth={true}
//               >
//                 <div className="iconButtonContainer">
//                   <IconButton
//                     aria-label="delete"
//                     sx={{ p: 0, "&:hover": { color: "green" } }}
//                   >
//                     <HomeIcon style={{ color: "white" }} />
//                   </IconButton>
//                 </div>
//                 <div> Home</div>
//               </Link>
//               <Link
//                 className="projectLink"
//                 to="projectRef"
//                 spy={true}
//                 smooth={true}
//               >
//                 <div className="iconButtonContainer">
//                   <IconButton aria-label="delete" sx={{ p: 0 }}>
//                     <ViewCarouselIcon style={{ color: "white" }} />
//                   </IconButton>
//                 </div>
//                 <div> Projects</div>
//               </Link>
//               <Link
//                 className="projectLink"
//                 to="experienceRef"
//                 spy={true}
//                 smooth={true}
//               >
//                 <div className="iconButtonContainer">
//                   <IconButton aria-label="delete" sx={{ p: 0 }}>
//                     <ViewTimelineIcon style={{ color: "white" }} />
//                   </IconButton>
//                 </div>
//                 <div>TimeLine</div>
//               </Link>

//               <Link
//                 className="projectLink"
//                 to="skillsRef"
//                 spy={true}
//                 smooth={true}
//               >
//                 <div className="iconButtonContainer">
//                   <IconButton aria-label="delete" sx={{ p: 0 }}>
//                     <ViewModuleIcon style={{ color: "white" }} />
//                   </IconButton>
//                 </div>
//                 <div>Skills</div>
//               </Link>
//               <Link
//                 className="projectLink"
//                 to="contactRef"
//                 spy={true}
//                 smooth={true}
//               >
//                 <div className="iconButtonContainer">
//                   <IconButton aria-label="delete" sx={{ p: 0 }}>
//                     <EmailIcon style={{ color: "white" }} />
//                   </IconButton>
//                 </div>
//                 <div>Contact</div>
//               </Link>
//             </div>
//           </div>
