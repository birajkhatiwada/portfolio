import ProjectCard from './projectCard';
import './projectsList.css';
import jellyImg from './images/jelly.jpg';
import jellyFish from './images/jammy-jellyfish-wallpaper.jpg';
import hippo from './images/new-wallpaper-hirsute-hippo.jpg';
import clockOutApp from './images/clockoutCalculatorDemo.webm';
import covidTravelLog from './images/covidTravel.webm';
import animeRecommendation from './images/animeRecommendation.webm';
import { useState } from 'react';

const ProjectList = (props) => {
  const [data, setData] = useState('');
  const passData = (childData) => {
    setData(childData);
  };
  let whichVideo = '';
  if (data.includes(jellyImg)) {
    whichVideo = clockOutApp;
  } else if (data.includes(jellyFish)) {
    whichVideo = covidTravelLog;
  } else if (data.includes(hippo)) {
    whichVideo = animeRecommendation;
  } else {
  }
  function handleOnClick() {
    console.log('got here');
    console.log(data);
  }

  return (
    <div>
      <div className="test">
        <video src={whichVideo} autoPlay loop></video>
        <div className="projects">
          <ProjectCard
            className="project"
            passData={passData}
            image={jellyImg}
            onClick={handleOnClick}
          ></ProjectCard>
          <ProjectCard
            className="project"
            passData={passData}
            onClick={handleOnClick}
            image={jellyFish}
          ></ProjectCard>
          <ProjectCard
            className="project"
            onClick={handleOnClick}
            passData={passData}
            image={hippo}
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
