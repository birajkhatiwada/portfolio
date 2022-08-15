import React, { useState } from 'react';
import './projectCard.css';

const ProjectCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleOnClick = () => {
    console.log("i'm here in projectCard.js");
    props.passData(props.name);
  };
  return (
    <div className="project-card">
      <div className="front" onClick={handleOnClick}>
        <div className="projectName">{props.name}</div>
        <div className='projectName'>{props.isClicked?"true":"false"}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
