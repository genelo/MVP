import React ,{ useEffect }from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import GroupList from './GroupList.jsx';

const GroupDisplayList = ({participants, setParticipants}) => {

  const enterSubmit = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addParticipant();
      }
    };

  const addParticipant = () => {
    const inputElem = document.getElementById('addParticipantInput');
    const name = inputElem.value;
    setParticipants([... participants, name]);
    inputElem.value = null;

    inputElem.focus();
  };

  const deleteParticipant = (e) => {
    const index = e.target.parentElement.parentElement.dataset.index;
    participants.splice(parseInt(index, 10), 1);
    setParticipants([...participants]);
  }

  return (
    <div id='groupDisplayList'>
      <div id='addParticipant'>
        <input type="text" id="addParticipantInput" placeholder="Add Participant..." onKeyDown={enterSubmit}></input>
        <FontAwesomeIcon id="addParticipantButton" icon={faUserPlus} onClick={addParticipant}/>
      </div>
      <GroupList participants={participants} deleteParticipant={deleteParticipant}/>
    </div>
  )
};

export default GroupDisplayList;