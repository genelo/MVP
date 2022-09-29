import React from 'react';

const ManageAccount = () => {

  return (
    <div id="manageAccountModal" onClick={e => e.stopPropagation()} hidden>
      <div id="manageAccountTitle"> Manage Account </div>
      <div className="manageAccountItem"> Change Password</div>
      <div className="manageAccountItem"> Update Email</div>
    </div>
  )

}

export default ManageAccount;