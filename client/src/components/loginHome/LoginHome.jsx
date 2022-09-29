import React, { useState } from 'react';
import css from '../../../dist/styles.css';
import GroupDisplay from '../groupDisplay/GroupDisplay.jsx';
import GroupOrSelect from '../groupOrSelect/GroupOrSelect.jsx';
import ResultDisplay from '../resultDisplay/ResultDisplay.jsx';
import ManageAccount from './ManageAccount.jsx';
import ManageGroups from './ManageGroups.jsx';
import SwitchGroups from './SwitchGroups.jsx';
import Menu from './Menu.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard, faBars } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');



const LoginHome = ({user, setUser}) => {
const [participants, setParticipants] = useState([]);
const [results, setResults] = useState([]);

const logout = () => {
  setUser(null);
}

const closeModal = () => {
  //iterate through modals and hide all
  document.getElementById('switchGroupsModal').setAttribute('hidden','');
  document.getElementById('manageGroupsModal').setAttribute('hidden','');
  document.getElementById('manageAccountModal').setAttribute('hidden','');
  document.getElementById('menu').setAttribute('hidden', '');
}

const openMenu = (e) => {
  e.stopPropagation();
  const elem = document.getElementById('menu');
  if(elem.getAttribute('hidden') === ''){
    elem.removeAttribute('hidden');
  }else{
    elem.setAttribute('hidden','');
  }
};

const saveGroup = () => {
  const name= document.getElementsByClassName('groupDisplayName')[0].textContent;

  let found  = false;
  for(let i=0; i < user.groups.length; i++){
    if(user.groups[i].name === name){
      user.groups[i].participants = participants;
      found = true;
      break;
    }
  }

  if(!found){
    user.groups.push({name: name, participants: participants});
  }

  axios.post('http://localhost:3000/saveGroup', user, {headers:{'content-type':'application/json'}} )
  .then(() => {
    alert('Save Successful');
    setUser(user);
    setParticipants([...participants]);
  })
  .catch((err) => console.log(err));
}

  return (
    <div id="modalWrapper" onClick={closeModal}>
      <SwitchGroups setParticipants={setParticipants} user={user}/>
      <ManageGroups setUser={setUser} />
      <ManageAccount setUser={setUser} />
      <Menu logout={logout} closeModal={closeModal}/>
      <div>
        <header id="header"><FontAwesomeIcon id='logo' icon={faHatWizard} /> Sorting Hat </header>
          <div id='headerButtons'>
            Hello {user.username}!
            <FontAwesomeIcon id='menuButton' icon={faBars} onClick={openMenu}/>
          </div>
      </div>
      <div className="mainContainer">
        <div />
        <div>
          <GroupDisplay participants={participants} setParticipants={setParticipants}/>
          <div>
            <button onClick={saveGroup}>Save Group</button>
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