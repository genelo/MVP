import React, { useState } from 'react';
import css from '../../../dist/styles.css';
import GroupDisplay from '../groupDisplay/GroupDisplay.jsx';
import GroupOrSelect from '../groupOrSelect/GroupOrSelect.jsx';
import ResultDisplay from '../resultDisplay/ResultDisplay.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';



const LoginHome = ({setUser}) => {
const [participants, setParticipants] = useState([]);
const [results, setResults] = useState([]);

const logout = () => {
  setUser(null);
}

const closeModal = () => {
  //iterate through modals and hide all
}

  return (
    <div id="modalWrapper" onClick={closeModal}>
      {/* switch group modal
          manage group modal
          manage account modal
       */}
      <div>
        <header id="header"><FontAwesomeIcon id='logo' icon={faHatWizard} /> Sorting Hat </header>
          <div id='headerButtons'>
            {/* HAMBURGER MENU */}
          </div>
      </div>
      <div className="mainContainer">
        <div />
        <div>
          <GroupDisplay participants={participants} setParticipants={setParticipants}/>
          <div>
            <button>Save Group</button>
          </div>
          <GroupOrSelect participants={participants} setResults={setResults}/>
          <ResultDisplay results={results}/>
          <div>
            <button>Save results</button>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default LoginHome;