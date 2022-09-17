import { Parallax, useParallax } from "react-scroll-parallax";
import clockOutApp from "./public/clockoutCalculatorDemo.gif";
import covidTravelLog from "./public/covidTravel.gif";
import animeRecommendation from "./public/animeRecommendation.gif";
import pathFinding from "./public/pathfinding.gif";
import pathF from "./images/pathfinding.mp4";
import { useState, useRef } from "react";
import "./projectsList.css";

const Projects = () => {
  const [isClockOutVisible, setClockOutIsVisible] = useState(true);

  const [isAnimeVisible, setAnimeIsVisible] = useState(false);
  const [isCovidVisible, setCovidIsVisible] = useState(false);
  const [isPathVisible, setPathIsVisible] = useState(false);
  const [isKronosTime, setIsKronosTime] = useState(false);
  const [isCovidTravelLog, setIsCovidTravelLog] = useState(false);
  const [isAnimeRecommendation, setIsAnimeRecommendation] = useState(false);
  const [isPathFinding, setIsPathFinding] = useState(false);

  const [isHoverClockout, setIsHoverClockout] = useState(false);
  const [isHoverAnime, setIsHoverAnime] = useState(false);
  const [isHoverCovid, setIsHoverCovid] = useState(false);
  const [isHoverPathfinding, setIsHoverPathfinding] = useState(false);
  const clockOutRef = useRef(null);
  const animeRef = useRef(null);
  const covidRef = useRef(null);
  const pathRef = useRef(null);

  const scrollUp =
    useParallax <
    HTMLDivElement >
    {
      scale: [0.5, 1, "easeInQuad"]
    };
  // const FadeUp = batch(Fade(), Move(), Sticky(), FadeOut());

  const Spin = (cycle) => ({
    in: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`
      }
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`
      }
    }
  });

  function handleOnHoverClockout() {
    // setIsHoverClockout(true);
  }
  function handleOnHoverAnime() {
    // setIsHoverAnime(true);
  }
  function handleOnHoverCovid() {
    // setIsHoverCovid(true);
  }
  function handleOnHoverPathfinding() {
    // setIsHoverPathfinding(true);
  }
  function handleOffHoverClockout() {
    // setIsHoverClockout(false);
  }
  function handleOffHoverAnime() {
    // setIsHoverAnime(false);
  }
  function handleOffHoverCovid() {
    // setIsHoverCovid(false);
  }
  function handleOffHoverPathfinding() {
    // setIsHoverPathfinding(false);
  }
  function handleOnClickKronosTime() {
    setIsKronosTime(true);
    setIsCovidTravelLog(false);
    setIsAnimeRecommendation(false);
    setIsPathFinding(false);
    // console.log("in the handle function");
  }
  function handleOnClickCovidTravelLog() {
    setIsKronosTime(false);
    setIsCovidTravelLog(true);
    setIsAnimeRecommendation(false);
    setIsPathFinding(false);
  }

  function handleOnClickAnimeRecommendation() {
    setIsKronosTime(false);
    setIsCovidTravelLog(false);
    setIsAnimeRecommendation(true);
    setIsPathFinding(false);
  }
  function handleOnClickPathFinding() {
    setIsKronosTime(false);
    setIsCovidTravelLog(false);
    setIsAnimeRecommendation(false);
    setIsPathFinding(true);
  }

  return (
    <>
      <div className="preProjectsContainer">
        <div className="videosContainer">
          <div
            className={
              isClockOutVisible
                ? "videoContainer clockoutContainer leftvideoContainer showVideo"
                : "videoContainer leftvideoContainer showVideo"
            }
            ref={clockOutRef}
          >
            <Parallax speed={-10}>
              {" "}
              <div className="video clockout lefvideo"></div>
            </Parallax>
            <Parallax speed={10}>
              <div className="projectTitleContainer clockoutContainer lefttitleContainer ">
                <div className="projectTitle leftProjectTitle">
                  <div className="projectTitleName firstTitle clockoutTitle">
                    clockout
                  </div>
                  <div className="projectTitleName secondTitle calculatorTitle">
                    CALCULATOR
                  </div>
                </div>
                <div
                  ref={scrollUp.ref}
                  className={
                    isHoverClockout ? "projectDescHide" : "projectDescription"
                  }
                  onMouseOver={handleOnHoverClockout}
                  onMouseOut={handleOffHoverClockout}
                >
                  At my workplace we would have to clock in and then clock out
                  for lunch and clock back in from lunch, and at times there
                  would be confusion as to when to clock out to make the whole
                  shift 8 hours. I observed many of my coworkers asking other
                  for the answers. So, i decided to work on this project to help
                  the problem.
                  <div className="linksDiv leftLinksDiv">
                    <a className="link">
                      https://github.com/birajkhatiwada/kronosTimeCalculator
                    </a>
                  </div>
                  <div className="projectLanguageDiv leftProjectLanguageDiv">
                    <div className="projectLanguage">react</div>
                    <div className="projectLanguage">html</div>
                    <div className="projectLanguage">css</div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          <div
            className={
              isAnimeVisible
                ? "videoContainer animeContainer rightvideoContainer showVideo"
                : "videoContainer animeContainer rightvideoContainer showVideo"
            }
            ref={animeRef}
          >
            <Parallax speed={-10}>
              {" "}
              <div className="video anime rightvideo"></div>
            </Parallax>

            <Parallax speed={10}>
              <div className="projectTitleContainer animeTitleContainer righttitleContainer ">
                <div className="projectTitle rightProjectTitle">
                  <div className="projectTitleName firstTitle animeTitle">
                    anime
                  </div>
                  <div className="projectTitleName secondTitle recommendationTitle">
                    RECOMMENDATION
                  </div>
                </div>

                <div
                  className={
                    isHoverAnime
                      ? "projectDescHide"
                      : "projectDescription rightProjectDescription rightProjectDescription"
                  }
                  onMouseOver={handleOnHoverAnime}
                  onMouseOut={handleOffHoverAnime}
                >
                  Have you ever finished a show and wanted to watch another
                  similar show? This Anime Recommendation search engine does
                  exactly that. It also allows users to search for Animes, view
                  trending Animes and upcoming Animes. This is all done through
                  API "api.jikan.moe".
                  <div className="linksDiv rightLinksDiv">
                    <a className="link">
                      https://github.com/birajkhatiwada/AnimeRecommendations
                    </a>
                  </div>
                  <div className="projectLanguageDiv rightProjectLanguageDiv">
                    <div className="projectLanguage">react</div>
                    <div className="projectLanguage">html</div>
                    <div className="projectLanguage">css</div>
                    <div className="projectLanguage">Api calls</div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          <div
            className={
              isCovidVisible
                ? "videoContainer covidVideoContainer leftvideoContainer showVideo"
                : "videoContainer covidVideoContainer showVideo"
            }
            ref={covidRef}
          >
            <Parallax speed={-10}>
              {" "}
              <div className="video covid leftvideo"></div>
            </Parallax>
            <Parallax speed={10}>
              <div className="projectTitleContainer covidTitleContainer lefttitleContainer ">
                <div className="projectTitle leftProjectTitle">
                  <div className="projectTitleName firstTitle covidTitle">
                    covid
                  </div>
                  <div className="projectTitleName secondTitle travellogTitle">
                    TRAVELLOG
                  </div>
                </div>

                <div
                  className={
                    isHoverCovid ? "projectDescHide" : "projectDescription"
                  }
                  onMouseOver={handleOnHoverCovid}
                  onMouseOut={handleOffHoverCovid}
                >
                  I worked on a COVID Travel Log web app that allows users to
                  plan their trips according to the severity of the current
                  global pandemic’s impact. During/after this pandemic, it's
                  quite difficult to find a safe place to travel. So, I decided
                  to make an app that will show the information about deaths,
                  and confirmed COVID cases in different places. This
                  covidTravelLog will allow users to plan their trips
                  accordingly. Users will also be able to create logs for the
                  places they have visited and the places that they are
                  interested in visiting.
                  <div className="linksDiv leftLinksDiv">
                    <a className="link">
                      https://github.com/birajkhatiwada/covidTravelLog
                    </a>
                  </div>
                  <div className="projectLanguageDiv leftProjectLanguageDiv">
                    <div className="projectLanguage">react</div>
                    <div className="projectLanguage">node.js</div>
                    <div className="projectLanguage">mongodb</div>
                    <div className="projectLanguage">api calls</div>
                    <div className="projectLanguage">html</div>
                    <div className="projectLanguage">css</div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          <div
            className={
              isPathVisible
                ? "videoContainer pathFindingContainer rightvideoContainer showVideo"
                : "videoContainer pathFindingContainer rightvideoContainer showVideo"
            }
            ref={pathRef}
          >
            <Parallax speed={-10}>
              {" "}
              <div className="video pathfinding rightvideo"></div>
            </Parallax>

            <Parallax speed={10}>
              <div className="projectTitleContainer pathfindingTitleContainer righttitleContainer ">
                <div className="projectTitle rightProjectTitle">
                  <div className="projectTitleName firstTitle pathTitle">
                    pathfinding
                  </div>
                  <div className="projectTitleName secondTitle findingTitle">
                    VISUALIZATION
                  </div>
                </div>

                <div
                  className={
                    isHoverPathfinding
                      ? "projectDescHide"
                      : "projectDescription rightProjectDescription"
                  }
                  onMouseOver={handleOnHoverPathfinding}
                  onMouseOut={handleOffHoverPathfinding}
                >
                  In order to visually understand pathfinding algorithms, I
                  implemented the A* algorithm, which will allow users to plant
                  two points, then they will be able to create barriers within
                  the grid. This algorithm will then explore all valid paths and
                  return the shortest path. I worked on this project because I
                  was extremely fascinated by the idea of how these pathfinding
                  algorithms would look in visualization.
                  <div className="linksDiv rightLinksDiv">
                    <a className="link">
                      https://github.com/birajkhatiwada/PathfindingVisualization
                    </a>
                  </div>
                  <div className="projectLanguageDiv rightProjectLanguageDiv">
                    <div className="projectLanguage">python</div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="seeMoreContainer">
            <button className="seeMore">see more......</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
