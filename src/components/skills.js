import "./skills.css";
import resume from "./images/resume.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Skills = () => {
  return (
    <>
      <div className="skillsContainer">
        <div className="skillsTitleContainer">
          {/* <ArrowBackIosIcon className="arrow"></ArrowBackIosIcon> */}
          <div className="skillsTitle">Skills</div>
        </div>
        <div className="allSkillsContainer">
          <div className="skillsRow">
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
          </div>
          <div className="skillsRow">
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
          </div>
          <div className="skillsRow">
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
          </div>
          <div className="skillsRow">
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
            />
            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"
            />

            <img
              className="skillsIcon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
            />
          </div>
        </div>

        {/* <div className="resumeSvgContainer">
          <a className="resumeTitle">Resume</a>
          <ArrowForwardIosIcon className="arrow"></ArrowForwardIosIcon>
          <img className="resumeSvg" src={resume}></img>
        </div> */}
      </div>
    </>
  );
};

export default Skills;
