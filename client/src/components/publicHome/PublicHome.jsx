import React, { useState } from 'react';
import css from '../../../dist/styles.css';
import GroupDisplay from '../groupDisplay/GroupDisplay.jsx';
import GroupOrSelect from '../groupOrSelect/GroupOrSelect.jsx';
import ResultDisplay from '../resultDisplay/ResultDisplay.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';



const PublicHome = () => {
const [participants, setParticipants] = useState([]);
const [results, setResults] = useState([]);

  return (
    <div>
      <div>
        <header id="header"><FontAwesomeIcon id='logo' icon={faHatWizard} /> Sorting Hat </header>
          <div id='headerButtons'>
            <button className="header">Log In</button>
            <button className="header">Sign Up</button>
          </div>
      </div>
      <div className="mainContainer">
        <div />
        <div>
          <GroupDisplay participants={participants} setParticipants={setParticipants}/>
          <GroupOrSelect participants={participants} setResults={setResults}/>
          <ResultDisplay results={results}/>
        </div>
        <div />
      </div>
    </div>
  )
}

export default PublicHome;