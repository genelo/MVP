import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const GroupList = ({participants, deleteParticipant}) => {

  return(
    <div id="groupListContainer">
      <div id="groupList">
        {participants.map((participant, index) => (
          <div className='participant' key={index} data-index={index}>
            <div>
              {index + 1}. {participant}
            </div>
              <FontAwesomeIcon className="deleteParticipantButton" icon={faRectangleXmark} onClick={deleteParticipant} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default GroupList;