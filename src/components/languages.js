import React from "react";
import './languages.css'

const Languages = (props) => {
    return(
        <div className="LanguagesContainer">
            <div className="react">REACT</div>
            <div className="cpp">C++</div>
            <div className="javascript">JAVASCRIPT</div>
            <div className="java">JAVA</div>
            <div className="python">PYTHON</div>
            <div className="sql">SQL</div>
            <div className="mongodb">MONGODB</div>
            <div className="git">GIT</div>
            <div className="node">NODE</div>
            <div className="html">HTML</div>
            <div className="css">CSS</div>
        </div>
    )
};

export default Languages;