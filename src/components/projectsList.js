import ProjectCard from './projectCard';
import './projectsList.css';
import jellyImg from './images/jelly.jpg';
import jellyFish from './images/jammy-jellyfish-wallpaper.jpg';
import hippo from './images/new-wallpaper-hirsute-hippo.jpg';
import clockOutApp from './public/clockoutCalculatorDemo.gif';
import covidTravelLog from './public/covidTravel.gif';
import animeRecommendation from './public/animeRecommendation.gif';
import pathFinding from './public/pathfinding.gif';
import pathF from './images/pathfinding.mp4'
import { useState } from 'react';
import ReactPlayer from 'react-player'



const ProjectList = (props) => {
  const [data, setData] = useState('');
  const [isHoverClockout, setIsHoverClockout] = useState(false);
  const [isHoverAnime, setIsHoverAnime] = useState(false);
  const [isHoverCovid, setIsHoverCovid] = useState(false);
  const [isHoverPathfinding, setIsHoverPathfinding] = useState(false);


  const [whichVideo, setWhichVideo] = useState('');
  const [isKronosTime, setIsKronosTime] = useState(false);
  const [isCovidTravelLog, setIsCovidTravelLog] = useState(false);
  const [isAnimeRecommendation, setIsAnimeRecommendation] = useState(false);
  const [isPathFinding, setIsPathFinding] = useState(false);
  const [clickedProject, setClickedProject] = useState(1);
  const passData = (childData) => {
    setData(childData);
  };

  console.log('here is the data ' + data + ' and done ');
  // if (data === 'Kronos Time') {
  //   setWhichVideo(clockOutApp);
  // } else if (data === 'Covid TravelLog') {
  //   setWhichVideo(covidTravelLog);
  // } else if (data === 'Anime Recommendation') {
  //   setWhichVideo(animeRecommendation);
  // } else {
  //   setWhichVideo(pathFinding);
  // }
  function handleOnHoverClockout(){
    // setIsHoverClockout(true);
  }
   function handleOnHoverAnime(){
    // setIsHoverAnime(true);
  }
  function handleOnHoverCovid(){
    // setIsHoverCovid(true);
  }
  function handleOnHoverPathfinding(){
    // setIsHoverPathfinding(true);
  }
  function handleOffHoverClockout(){
    // setIsHoverClockout(false);
  }
   function handleOffHoverAnime(){
    // setIsHoverAnime(false);
  }
  function handleOffHoverCovid(){
    // setIsHoverCovid(false);
  }
  function handleOffHoverPathfinding(){
    // setIsHoverPathfinding(false);
  }
  function handleOnClickKronosTime() {
    setIsKronosTime(true);
    setIsCovidTravelLog(false);
    setIsAnimeRecommendation(false);
    setIsPathFinding(false);
    console.log("in the handle function");
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
    <div>
      <div className="projectsContainer">
      {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,186.7C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,250.7C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
      {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,261.3C640,256,800,256,960,234.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        {/* <div className='verticalLine'></div> */}
        <div className="ogprojectsTitle">
          {/* <div className='projectsTitleFirstPart'>
            <div className='projectsTitleFirstPartChild childname'>birajkhatiwada</div>
            <div className='projectsTitleFirstPartChild in'>in</div>
            <div className='projectsTitleFirstPartChild squigly'>~</div>
            <div className='projectsTitleFirstPartChild lambda'>λ :</div>
          </div>
          <div className='projectsTitleSecondPart'> */}
            projects
          {/* </div> */}
          
          {/* <div className='straightline projectUnderline'></div> */}
        </div>
        {/* <svg className='secondwave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,261.3C640,256,800,256,960,234.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        {/* <svg className='thirdwave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        {/* <svg className='fourthwave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,138.7C640,171,800,245,960,261.3C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        {/* <svg className='fifthwave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        <div className='videosContainer'>
          <div className='videoContainer covidVideoContainer leftvideoContainer'>
            {/* <div className="videoContainer2"> */}
              <div className='video clockout leftvideo'></div>
              <div className='projectTitleContainer clockoutContainer lefttitleContainer '>
                <div className="projectTitle">
                  <div className='projectTitleName firstTitle clockoutTitle'>
                    clockout
                  </div>
                  <div className='projectTitleName secondTitle calculatorTitle'>
                    CALCULATOR
                  </div>
                </div>
                  
                <div className='linksDiv'>
                  <a className='link'>https://github.com/birajkhatiwada/kronosTimeCalculator</a>
                </div>
                <div className={isHoverClockout?'projectDescHide':'projectDescription'} onMouseOver={handleOnHoverClockout} onMouseOut={handleOffHoverClockout}>
                  At my workplace we would have to clock in and then clock out for lunch and clock back in from lunch, and at times there would be confusion as to when to clock out to make the whole shift 8 hours. I observed many of my coworkers asking other for the answers. 
                  So, i decided to work on this project to help the problem.
                </div>
                <div className='projectLanguageDiv'>
                  <div className='projectLanguage'>react</div>
                  <div className='projectLanguage'>html</div>
                  <div className='projectLanguage'>css</div>
                </div> 
              </div>
            {/* </div> */}
            
          </div>
        
          {/* <div className='straightline betprojectline'></div> */}

          <div className='videoContainer animeVideoContainer toberightvideoContainer rightvideoContainer'>
            <div className='projectTitleContainer animeTitleContainer righttitleContainer '>
              <div className="projectTitle">
                <div className='projectTitleName firstTitle animeTitle'>
                  anime
                </div>
                <div className='projectTitleName secondTitle recommendationTitle'>
                  RECOMMENDATION
                </div>
              </div>
              
              <div className='linksDiv animeLinksDiv'>
                <a className='link'>https://github.com/birajkhatiwada/AnimeRecommendations</a>
              </div>
              <div className={isHoverAnime?"projectDescHide":"projectDescription rightProjectDescription"} onMouseOver={handleOnHoverAnime} onMouseOut={handleOffHoverAnime}>
              Have you ever finished a show and wanted to watch another similar show? This Anime Recommendation search engine does exactly that. It also allows users to search for Animes, view trending Animes and upcoming Animes. This is all done through API "api.jikan.moe".
              </div>
              <div className='projectLanguageDiv animeLanguaugeDiv'>
                <div className='projectLanguage'>react</div>
                <div className='projectLanguage'>html</div>
                <div className='projectLanguage'>css</div>
                <div className='projectLanguage'>Api calls</div>
              </div>
            </div>
            <div className='video anime rightvideo'>
            </div>
          </div>
          
          {/* <div className='straightline'></div> */}

          <div className='videoContainer covidVideoContainer leftvideoContainer'>
            <div className='video covid leftvideo'>
              
            </div>
            <div className='projectTitleContainer covidTitleContainer lefttitleContainer '>
                <div className="projectTitle">
                  <div className='projectTitleName firstTitle covidTitle'>
                    covid 
                  </div>
                  <div className='projectTitleName secondTitle travellogTitle'>
                    TRAVELLOG
                  </div>
                </div>
                
                <div className='linksDiv'>
                  <a className='link'>https://github.com/birajkhatiwada/covidTravelLog</a>
                </div>
                <div className={isHoverCovid?"projectDescHide":"projectDescription"} onMouseOver={handleOnHoverCovid} onMouseOut={handleOffHoverCovid}>
                I worked on a COVID Travel Log web app that allows users to plan their trips according to the severity of the current global pandemic’s impact. During/after this pandemic, it's quite difficult to find a safe place to travel. So, I decided to make an app that will show the information about deaths, and confirmed COVID cases in different places. This covidTravelLog will allow users to plan their trips accordingly. Users will also be able to create logs for the places they have visited and the places that they are interested in visiting.
                </div>
                <div className='projectLanguageDiv'>
                  <div className='projectLanguage'>react</div>
                  <div className='projectLanguage'>node.js</div>
                  <div className='projectLanguage'>mongodb</div>
                  <div className='projectLanguage'>api calls</div>
                  <div className='projectLanguage'>html</div>
                  <div className='projectLanguage'>css</div>
                </div>
              </div>            
          </div>
          {/* <div className='straightline betprojectline'></div> */}
          

          <div className='videoContainer pathFindingContainer rightvideoContainer'>
            <div className='projectTitleContainer pathfindingTitleContainer righttitleContainer '>
              <div className="projectTitle">
                <div className='projectTitleName firstTitle pathTitle'>
                  a* 
                </div>
                <div className='projectTitleName secondTitle findingTitle'>
                  PATHFINDING
                </div>
              </div>
              <div className='linksDiv'>
                <a className='link'>https://github.com/birajkhatiwada/PathfindingVisualization
                </a>
              </div>
              <div className={isHoverPathfinding?"projectDescHide":"projectDescription rightProjectDescription"} onMouseOver={handleOnHoverPathfinding} onMouseOut={handleOffHoverPathfinding}>
              In order to visually understand pathfinding algorithms, I implemented the A* algorithm, which will allow users to plant two points, then they will be able to create barriers within the grid. This algorithm will then explore all valid paths and return the shortest path. I worked on this project because I was extremely fascinated by the idea of how these pathfinding algorithms would look in visualization.
              </div>
              <div className='projectLanguageDiv'>
                <div className='projectLanguage'>python</div>
              </div>
            </div>
            <div className='video pathfinding rightvideo'>
            </div>
          </div>
          <button className='seeMore'>see more......</button>

          {/* <div className="projects">
            <ProjectCard
              className="project"
              passData={passData}
              image={jellyImg}
              onClick={handleOnClickKronosTime}
              name="Kronos Time"
              isClicked = {isKronosTime}
            ></ProjectCard>
            <ProjectCard
              className="project"
              passData={passData}
              onClick={handleOnClickCovidTravelLog}
              image={jellyFish}
              name="Covid TravelLog"
              isClicked = {isCovidTravelLog}
            ></ProjectCard>
            <ProjectCard
              className="project"
              onClick={handleOnClickAnimeRecommendation}
              passData={passData}
              image={hippo}
              name="Anime Recommendation"
              isClicked = {isAnimeRecommendation}
            ></ProjectCard>
            <ProjectCard
              className="project"
              onClick={handleOnClickPathFinding}
              passData={passData}
              image={hippo}
              name="PathFinder Visualization"
              isClicked = {isPathFinding}
            ></ProjectCard> */}
          {/* </div> */}
        </div>
      </div>
        
    </div>
  );
};

export default ProjectList;
