import { useState } from 'react';
import './App.scss';
import ProjectList from './components/projectsList';
import EmailForm from './components/emailForm';
import Terminal from './components/terminal';
import Dock from './components/dock';

function App() {
  const [EmailAppClick, setEmailAppClick] = useState(false);
  const [TerminalAppClick, setTerminalAppClick] = useState(true);
  const passData = (childData) => {
    console.log(childData);
    console.log(TerminalAppClick);
    if (childData == 'email') setEmailAppClick(!EmailAppClick);
    if (childData == 'terminal') setTerminalAppClick(!TerminalAppClick);
  };

  const current = new Date();

  const date = `${
    current.getMonth() + 1
  } - ${current.getDate()} - ${current.getFullYear()}`;

  return (
    <div className="App">
      <div className="firstPage">
        <div className="panel">
          <p className="myName">birajkhatiwada</p>
          <p className="date">{date}</p>
        </div>
        <Terminal terminalAppClick={TerminalAppClick}></Terminal>
        <div className="emailContainer">
          <EmailForm
            className="emailForm"
            emailAppClick={EmailAppClick}
          ></EmailForm>
        </div>
        <Dock passData={passData}></Dock>
      </div>
      <ProjectList></ProjectList>
    </div>
  );
}

export default App;
