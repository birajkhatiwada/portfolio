import "./projectsList.css";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax, useParallax } from "react-scroll-parallax";
import Projects from "./projects";

const ProjectList = (props) => {
  const [data, setData] = useState("");
  const [whichVideo, setWhichVideo] = useState("");
  const [clickedProject, setClickedProject] = useState(1);
  const passData = (childData) => {
    setData(childData);
  };

  // const scrollUppy = useParallax({
  //   onChange: (element) => console.log(element)
  // });

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };
  // const clockOutObserver = new IntersectionObserver(entries => {
  //   const entry = entries[0];
  //   setClockOutIsVisible(entry.isIntersecting)
  //   console.log(entry);
  // }, options);
  // const animeObserver = new IntersectionObserver(entries => {
  //   const entry = entries[0];
  //   setAnimeIsVisible(entry.isIntersecting)
  //   console.log(entry);
  // }, options);
  // const covidObserver = new IntersectionObserver(entries => {
  //   const entry = entries[0];
  //   setCovidIsVisible(entry.isIntersecting)
  //   console.log(entry);
  // }, options);
  // const pathObserver = new IntersectionObserver(entries => {
  //   const entry = entries[0];
  //   setPathIsVisible(entry.isIntersecting)
  //   console.log(entry);
  // }, options);

  // useEffect(()=>{
  //   clockOutObserver.observe(clockOutRef.current);
  //   animeObserver.observe(animeRef.current);
  //   covidObserver.observe(covidRef.current);
  //   pathObserver.observe(pathRef.current);
  // }, []);
  // console.log('here is the data ' + data + ' and done ');
  // if (data === 'Kronos Time') {
  //   setWhichVideo(clockOutApp);
  // } else if (data === 'Covid TravelLog') {
  //   setWhichVideo(covidTravelLog);
  // } else if (data === 'Anime Recommendation') {
  //   setWhichVideo(animeRecommendation);
  // } else {
  //   setWhichVideo(pathFinding);
  // }

  return (
    <>
      <div id="projectRef">
        <div className="projectsContainer">
          <div className="projectsTitle">
            <Parallax speed={4}>
              {" "}
              <div className="projectsTitleBar">PROJECTS</div>
            </Parallax>
          </div>
        </div>
        <Projects></Projects>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProjectList;
