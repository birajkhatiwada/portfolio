import { Parallax, useParallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
  Thumbs,
  EffectCoverflow,
  HashNavigation
} from "swiper";

import "swiper/css/bundle";
import { useRef } from "react";
import "./projectsList.css";

SwiperCore.use([EffectCoverflow, Pagination]);

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
      <div className="videosContainer">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Mousewheel,
            Autoplay,
            Thumbs,
            HashNavigation
          ]}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          mousewheel={{ sensitivity: 5, forceToAxis: true, thresholdDelta: 2 }}
          // effect="cube"
          // spaceRight={200}
          slidesPerView={1}
          loop={true}
          speed={1300}
          effect="coverflow"
          coverflowEffect={{ rotate: 20, slideShadows: false }}
          // cardsEffect={{ slideShadows: false }}
          // flipEffect={{ limitRotation: true, slideShadows: true }}
          navigation={{ color: "white" }}
          pagination={{
            clickable: true,
            dynamicBullets: true
            // type: "progressbar"
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* <div className="preVideosContainer"> */}
          <SwiperSlide>
            <div className="videoContainerMain">
              <div
                className="videoContainer clockoutContainer leftvideoContainer showVideo"
                ref={clockOutRef}
              >
                <div className="videoContainerII">
                  <Parallax>
                    {" "}
                    <div className="video clockout lefvideo"></div>
                  </Parallax>
                  <Parallax>
                    <div className="projectTitleContainer clockoutContainer lefttitleContainer ">
                      <div className="projectTitle leftProjectTitle">
                        <Parallax
                        // speed={5}
                        >
                          <div className="projectTitleName firstTitle clockoutTitle">
                            clockout
                          </div>
                        </Parallax>
                        <Parallax
                        // speed={5}
                        >
                          <div className="projectTitleName secondTitle calculatorTitle">
                            CALCULATOR
                          </div>
                        </Parallax>
                      </div>
                      <div
                        ref={scrollUp.ref}
                        className="projectDescription clockoutDescription"
                      >
                        At my workplace we would have to clock in and then clock
                        out for lunch and clock back in from lunch, and at times
                        there would be confusion as to when to clock out to make
                        the whole shift 8 hours. I observed many of my coworkers
                        asking other for the answers. So, i decided to work on
                        this project to help the problem.
                        <div className="projectLanguageDiv leftProjectLanguageDiv">
                          <div className="projectLanguage">react</div>
                          <div className="projectLanguage">html</div>
                          <div className="projectLanguage">css</div>
                        </div>
                        <div className="linksDiv leftLinksDiv">
                          <a
                            href="https://github.com/birajkhatiwada/kronosTimeCalculator"
                            target="blank"
                            className="link"
                          >
                            https://github.com/birajkhatiwada/kronosTimeCalculator
                          </a>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="videoContainerMain">
              <div
                className="videoContainer animeContainer rightvideoContainer showVideo"
                ref={animeRef}
              >
                {" "}
                <div className="videoContainerII">
                  <Parallax>
                    {" "}
                    <div className="video anime rightvideo"></div>
                  </Parallax>

                  <Parallax>
                    <div className="projectTitleContainer animeTitleContainer righttitleContainer ">
                      <div className="projectTitle rightProjectTitle">
                        <Parallax

                        // speed={5}
                        >
                          {" "}
                          <div className="projectTitleName firstTitle animeTitle">
                            anime
                          </div>
                        </Parallax>
                        <Parallax

                        // speed/={5}
                        >
                          {" "}
                          <div className="projectTitleName secondTitle recommendationTitle">
                            RECOMMENDATION
                          </div>
                        </Parallax>
                      </div>
                      <div className="projectDescription rightProjectDescription rightProjectDescription">
                        Have you ever finished a show and wanted to watch
                        another similar show? This Anime Recommendation search
                        engine does exactly that. It also allows users to search
                        for Animes, view trending Animes and upcoming Animes.
                        This is all done through API "api.jikan.moe".
                        <div className="projectLanguageDiv rightProjectLanguageDiv">
                          <div className="projectLanguage">react</div>
                          <div className="projectLanguage">html</div>
                          <div className="projectLanguage">css</div>
                          <div className="projectLanguage">Api calls</div>
                        </div>
                        <div className="linksDiv rightLinksDiv">
                          <a
                            href="https://github.com/birajkhatiwada/AnimeRecommendations"
                            target="blank"
                            className="link"
                          >
                            https://github.com/birajkhatiwada/AnimeRecommendations
                          </a>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="videoContainerMain">
              <div
                className="videoContainer covidVideoContainer leftvideoContainer showVideo"
                ref={covidRef}
              >
                <div className="videoContainerII">
                  <Parallax>
                    {" "}
                    <div className="video covid leftvideo"></div>
                  </Parallax>
                  <Parallax>
                    <div className="projectTitleContainer covidTitleContainer lefttitleContainer ">
                      <div className="projectTitle leftProjectTitle">
                        <Parallax

                        // speed={5}
                        >
                          {" "}
                          <div className="projectTitleName firstTitle covidTitle">
                            covid
                          </div>
                        </Parallax>
                        <Parallax

                        // speed={5}
                        >
                          <div className="projectTitleName secondTitle travellogTitle">
                            TRAVELLOG
                          </div>
                        </Parallax>
                      </div>
                      <div className="projectDescription">
                        I worked on a COVID Travel Log web app that allows users
                        to plan their trips according to the severity of the
                        current global pandemic’s impact. During/after this
                        pandemic, it's quite difficult to find a safe place to
                        travel. So, I decided to make an app that will show the
                        information about deaths, and confirmed COVID cases in
                        different places. This covidTravelLog will allow users
                        to plan their trips accordingly. Users will also be able
                        to create logs for the places they have visited and the
                        places that they are interested in visiting.
                        <div className="projectLanguageDiv leftProjectLanguageDiv">
                          <div className="projectLanguage">react</div>
                          <div className="projectLanguage">node.js</div>
                          <div className="projectLanguage">mongodb</div>
                          <div className="projectLanguage">api calls</div>
                          <div className="projectLanguage">html</div>
                          <div className="projectLanguage">css</div>
                        </div>
                        <div className="linksDiv leftLinksDiv">
                          <a
                            href="https://github.com/birajkhatiwada/covidTravelLog"
                            target="blank"
                            className="link"
                          >
                            https://github.com/birajkhatiwada/covidTravelLog
                          </a>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="videoContainerMain">
              <div
                className="videoContainer pathFindingContainer rightvideoContainer showVideo"
                ref={pathRef}
              >
                <div className="videoContainerII">
                  <Parallax>
                    {" "}
                    <div className="video pathfinding rightvideo"></div>
                  </Parallax>
                  <Parallax>
                    <div className="projectTitleContainer pathfindingTitleContainer righttitleContainer ">
                      <div className="projectTitle rightProjectTitle">
                        <Parallax

                        // speed={5}
                        >
                          <div className="projectTitleName firstTitle pathTitle">
                            pathfinding
                          </div>
                        </Parallax>
                        <Parallax

                        // speed={5}
                        >
                          <div className="projectTitleName secondTitle findingTitle">
                            VISUALIZATION
                          </div>
                        </Parallax>
                      </div>
                      <div className="projectDescription rightProjectDescription">
                        In order to visually understand pathfinding algorithms,
                        I implemented the A* algorithm, which will allow users
                        to plant two points, then they will be able to create
                        barriers within the grid. This algorithm will then
                        explore all valid paths and return the shortest path. I
                        worked on this project because I was extremely
                        fascinated by the idea of how these pathfinding
                        algorithms would look in visualization.
                        <div className="projectLanguageDiv rightProjectLanguageDiv">
                          <div className="projectLanguage">python</div>
                        </div>
                        <div className="linksDiv rightLinksDiv">
                          <a
                            href="https://github.com/birajkhatiwada/PathfindingVisualization"
                            target="blank"
                            className="link"
                          >
                            https://github.com/birajkhatiwada/PathfindingVisualization
                          </a>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <div className="seeMoreContainer">
            <button className="seeMore">see more......</button>
          </div> */}
          {/* </div> */}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
