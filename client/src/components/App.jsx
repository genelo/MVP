import React , { useState }from 'react';
import PublicHome from './publicHome/PublicHome.jsx';
import LoginHome from './loginHome/LoginHome.jsx';
import css from '../../dist/styles.css';

const App = () => {
  const [user, setUser] = useState(null);

  if(user){
    return (
        <div className='baseBackground'>
          <LoginHome user={user} setUser={setUser}/>
        </div>
    )
  }
  return (
      <div className='baseBackground'>
        <PublicHome setUser={setUser}/>
      </div>
  );
};

export default App;