import React, { useState } from 'react';
import css from '../../../dist/styles.css';
import GroupDisplay from '../groupDisplay/GroupDisplay.jsx';
import GroupOrSelect from '../groupOrSelect/GroupOrSelect.jsx';
import ResultDisplay from '../resultDisplay/ResultDisplay.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';



const PublicHome = ({setUser}) => {
const [participants, setParticipants] = useState([]);
const [results, setResults] = useState([]);
const closeModal = () => {
  document.getElementById('loginModal').setAttribute('hidden','');
  document.getElementById('signUpModal').setAttribute('hidden','');
}

const login =(e) => {
  //open login modal
  e.stopPropagation();
  document.getElementById('loginModal').removeAttribute('hidden');
  document.getElementById('loginUsername').focus();
};

const signUp = (e) => {
  //open sign up modal
  e.stopPropagation();
  document.getElementById('signUpModal').removeAttribute('hidden');
};

  return (
    <div id="modalWrapper" onClick={closeModal}>
      <Login setUser={setUser} />
      <SignUp setUser={setUser} />
      <div>
        <header id="header"><FontAwesomeIcon id='logo' icon={faHatWizard} /> Sorting Hat </header>
          <div id='headerButtons'>
            <button className="header" onClick={login}>Log In</button>
            <button className="header" onClick={signUp}>Sign Up</button>
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