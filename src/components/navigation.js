import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";
import profile from "./images/profile.jpeg";
import resume from "./images/khatiwadabirajResume.pdf";
import "../App.scss";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="fixedEmailContainer">
        {/* <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        > */}
        <Avatar
          alt="Biraj Khatiwada"
          src={profile}
          sx={{ width: 40, height: 40 }}
        />
        {/* </StyledBadge> */}
        {/* <div className="nameNavigationContainer">
          <div className="nameNavigation">biraj</div>
        </div> */}
      </div>
      <div className="linksContainerMain">
        <div className="linksContainer">
          <Link
            className="projectLink"
            to="firstPageRef"
            spy={true}
            smooth={true}
          >
            <div> Home</div>
          </Link>
          <Link
            className="projectLink"
            to="projectRef"
            spy={true}
            smooth={true}
          >
            <div> Projects</div>
          </Link>
          <Link
            className="projectLink"
            to="experienceRef"
            spy={true}
            smooth={true}
          >
            <div>TimeLine</div>
          </Link>

          <Link className="projectLink" to="skillsRef" spy={true} smooth={true}>
            <div>Skills</div>
          </Link>
          <Link
            className="projectLink"
            to="contactRef"
            spy={true}
            smooth={true}
          >
            <div>Contact</div>
          </Link>
        </div>
      </div>
      <div className="resumeLinkContainer">
        <div className="projectLink">
          <a className="resumeLink" href={resume} target="blank">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
