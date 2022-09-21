import { Parallax, useParallax } from "react-scroll-parallax";
import { useRef } from "react";
import "./projectsList.css";

const Projects = () => {
  const clockOutRef = useRef(null);
  const animeRef = useRef(null);
  const covidRef = useRef(null);
  const pathRef = useRef(null);

  const scrollUp =
    useParallax <
    HTMLDivElement >
    {
      translateY: [-100, 100]
    };

  return (
    <>
      <div className="preVideosContainer">
        <div className="videosContainer">
          <div
            className="videoContainer clockoutContainer leftvideoContainer showVideo"
            ref={clockOutRef}
          >
            <div className="projectTitle leftProjectTitle">
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 1200}
                endScroll={window.innerWidth < 1500 ? 1100 : 1500}
                translateX={
                  window.innerWidth < 1500
                    ? [0, -130, "ease"]
                    : [0, -130, "ease"]
                }
                rotate={[0, -90]}
                scale={[1, 0.6]}

                // opacity={[1, 0]}
                // rootMargin={{ bottom: 300, top: 0 }}
              >
                <div className="projectTitleName firstTitle clockoutTitle">
                  clockout
                </div>
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 900 : 1200}
                endScroll={window.innerWidth < 1500 ? 1100 : 1500}
                translateX={
                  window.innerWidth < 1500 ? [0, 100, "ease"] : [0, 100, "ease"]
                }
                rotate={[0, 90]}
                scale={[1, 0.6]}
                // opacity={[1, 0]}
                // rootMargin={{ bottom: 300, top: 0 }}
              >
                <div className="projectTitleName secondTitle calculatorTitle">
                  CALCULATOR
                </div>
              </Parallax>
            </div>
            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 800 : 1100}
              endScroll={window.innerWidth < 1500 ? 1300 : 1600}
              // opacity={[1, 0.2]}
            >
              {" "}
              <div className="video clockout lefvideo"></div>
            </Parallax>
            <Parallax
              startScroll={window.innerWidth < 1500 ? 900 : 1200}
              endScroll={window.innerWidth < 1500 ? 1300 : 1600}
              speed={20}
            >
              <div className="projectTitleContainer clockoutContainer lefttitleContainer ">
                <div ref={scrollUp.ref} className="projectDescription">
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
            className="videoContainer animeContainer rightvideoContainer showVideo"
            ref={animeRef}
          >
            <div className="projectTitle rightProjectTitle">
              <Parallax
                startScroll={window.innerWidth < 1500 ? 1700 : 2100}
                endScroll={window.innerWidth < 1500 ? 1900 : 2300}
                translateX={[0, -130, "ease"]}
                rotate={[0, -90]}
                scale={[1, 0.7]}
              >
                {" "}
                <div className="projectTitleName firstTitle animeTitle">
                  anime
                </div>
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 1700 : 2100}
                endScroll={window.innerWidth < 1500 ? 1900 : 2300}
                translateX={[0, 75, "ease"]}
                rotate={[0, 90]}
                scale={[1, 0.5]}
              >
                {" "}
                <div className="projectTitleName secondTitle recommendationTitle">
                  RECOMMENDATION
                </div>
              </Parallax>
            </div>

            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 1700 : 2000}
              endScroll={window.innerWidth < 1500 ? 2100 : 2400}
            >
              {" "}
              <div className="video anime rightvideo"></div>
            </Parallax>

            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 1800 : 2100}
              endScroll={window.innerWidth < 1500 ? 2100 : 2400}
            >
              <div className="projectTitleContainer animeTitleContainer righttitleContainer ">
                <div className="projectDescription rightProjectDescription rightProjectDescription">
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
            className="videoContainer covidVideoContainer leftvideoContainer showVideo"
            ref={covidRef}
          >
            <div className="projectTitle leftProjectTitle">
              <Parallax
                startScroll={window.innerWidth < 1500 ? 2500 : 3000}
                endScroll={window.innerWidth < 1500 ? 2700 : 3200}
                translateX={[0, -220, "ease"]}
                rotate={[0, -90]}
                scale={[1, 0.7]}
              >
                {" "}
                <div className="projectTitleName firstTitle covidTitle">
                  covid
                </div>
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 2500 : 3000}
                endScroll={window.innerWidth < 1500 ? 2700 : 3200}
                translateX={[0, 125, "ease"]}
                rotate={[0, 90]}
                scale={[1, 0.7]}
              >
                <div className="projectTitleName secondTitle travellogTitle">
                  TRAVELLOG
                </div>
              </Parallax>
            </div>
            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 2500 : 2900}
              endScroll={window.innerWidth < 1500 ? 2900 : 3300}
            >
              {" "}
              <div className="video covid leftvideo"></div>
            </Parallax>
            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 2600 : 3000}
              endScroll={window.innerWidth < 1500 ? 2900 : 3300}
            >
              <div className="projectTitleContainer covidTitleContainer lefttitleContainer ">
                <div className="projectDescription">
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
            className="videoContainer pathFindingContainer rightvideoContainer showVideo"
            ref={pathRef}
          >
            <div className="projectTitle rightProjectTitle">
              <Parallax
                startScroll={window.innerWidth < 1500 ? 3300 : 3900}
                endScroll={window.innerWidth < 1500 ? 3500 : 4100}
                translateX={[0, -88, "ease"]}
                rotate={[0, -90]}
                scale={[1, 0.7]}
              >
                <div className="projectTitleName firstTitle pathTitle">
                  pathfinding
                </div>
              </Parallax>
              <Parallax
                startScroll={window.innerWidth < 1500 ? 3300 : 3900}
                endScroll={window.innerWidth < 1500 ? 3500 : 4100}
                translateX={[0, 76, "ease"]}
                rotate={[0, 90]}
                scale={[1, 0.7]}
              >
                <div className="projectTitleName secondTitle findingTitle">
                  VISUALIZATION
                </div>
              </Parallax>
            </div>
            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 3300 : 3800}
              endScroll={window.innerWidth < 1500 ? 3700 : 4200}
            >
              {" "}
              <div className="video pathfinding rightvideo"></div>
            </Parallax>
            <Parallax
              speed={20}
              startScroll={window.innerWidth < 1500 ? 3400 : 3800}
              endScroll={window.innerWidth < 1500 ? 3700 : 4200}
            >
              <div className="projectTitleContainer pathfindingTitleContainer righttitleContainer ">
                <div className="projectDescription rightProjectDescription">
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

          {/* <div className="seeMoreContainer">
            <button className="seeMore">see more......</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
