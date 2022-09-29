import React from 'react';

const SwitchGroups = ({user, setParticipants}) => {

  const handleSelect = (e) => {
    e.stopPropagation();
    const name = e.target.dataset.group;
    for(let i = 0; i < user.groups.length; i++) {
      if(name === user.groups[i].name){
        setParticipants(user.groups[i].participants);
        document.getElementsByClassName('groupDisplayName')[0].textContent = name;
        break;
      }
    }
  };

  return(
    <div id="switchGroupsModal" onClick={e => e.stopPropagation()} hidden>
      <div id="switchGroupsTitle"> Groups </div>
      {user.groups.map((group) =>  {
        return(
          <div className="switchGroupsItem" onClick={handleSelect} data-group={group.name}> {group.name} </div>
        )
        })
      }

      <button> Connect to Google Classroom </button>
    </div>
  )

}

export default SwitchGroups;