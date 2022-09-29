import React from 'react';

const Menu = ({logout, closeModal}) => {
  const manageGroups = (e) => {
    closeModal();
    e.stopPropagation();
    document.getElementById('manageGroupsModal').removeAttribute('hidden');
  };
  const manageAccount = (e) => {
    closeModal();
    e.stopPropagation();
    document.getElementById('manageAccountModal').removeAttribute('hidden');
  }
  const switchGroups = (e) => {
    closeModal();
    e.stopPropagation();
    document.getElementById('switchGroupsModal').removeAttribute('hidden');
  };

  return (
    <div id="menu" hidden>
      <div onClick={switchGroups} className="menuItem">
        Switch Groups
      </div>
      <div onClick={manageGroups} className="menuItem">
        Manage Groups
      </div>
      <div onClick={manageAccount} className="menuItem">
        Manage Account
      </div>
      <div onClick={logout} className="menuItem">
        Log Out
      </div>
    </div>
  )
}

export default Menu;