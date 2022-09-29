import React from 'react';

const ManageGroups = ({user, setUser}) => {

  return(
    <div id="manageGroupsModal" onClick={e => e.stopPropagation()} hidden>
        <div id="manageGroupsTitle"> Manage Groups </div>
        <div id="manageGroupsRules">
          <div id="avoidRule">
            <h3>Don't Group Together</h3>
          </div>
          <br/>
          <div id="pairRule">
            <h3>Must Group Together</h3>
          </div>
        </div>
        <br/>
        <div id="rulesList">

        </div>
    </div>
  )
}

export default ManageGroups;