import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import GroupDisplayList from './GroupDisplayList.jsx';
import css from  '../../../dist/styles.css'

const GroupDisplay = ({participants, setParticipants}) => {

  const editGroupName = () => {
    const name = document.getElementsByClassName('groupDisplayName')[0];
    name.focus();
    if(name.getAttribute('contentEditable') === 'false'){
      name.setAttribute('contentEditable', 'true');
      document.getElementById('editGroupNameButton').style.color = '#CAD2C5'
    }else{
      name.setAttribute('contentEditable', 'false');
      document.getElementById('editGroupNameButton').style.color = '#2F3E46';
    }
  }

  return (
    <div>
      <div className="groupDisplay">
        <div id="groupDisplayNameContainer">
          <span className='groupDisplayName input' placeholder="'Group'" contentEditable='false'>'Group'</span>
          <FontAwesomeIcon id="editGroupNameButton" icon={faFeatherPointed} onClick={editGroupName}/>
        </div>
        <GroupDisplayList participants ={participants} setParticipants={setParticipants}/>
      </div>
    </div>
  )
};

export default GroupDisplay;