import React from 'react';
import './projectCard.css';

const ProjectCard = (props) => {
  const handleOnClick = () => {
    console.log("i'm here");
    props.passData(props.image);
  };
  return (
    <div className="project-card">
      <div
        className="front"
        style={{ backgroundImage: `url(${props.image})` }}
        onClick={handleOnClick}
      ></div>
    </div>
  );
};

export default ProjectCard;
