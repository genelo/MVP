import React from 'react';
const axios = require('axios');

const Login = ({setUser}) => {
  const authorize = () => {
    const loginInfo = {};

    loginInfo.username = document.getElementById('loginUsername').value;
    loginInfo.password = document.getElementById('loginPassword').value;


    axios.post('http://localhost:3000/login', loginInfo, {headers : {"content-type": "application/json"}})
    .then((response) => {
      if(response.status === 200){
        setUser(response.data);
      } else{
        const modal = document.getElementById('loginModal');

        modal.classList.add("loginFail");

        setTimeout((() => {
          modal.classList.remove("loginFail");
        }), 1);
      }
    })
    .catch((err) => {
      const modal = document.getElementById('loginModal');
      modal.classList.add("loginFail");

      setTimeout((() => {
        modal.classList.remove("loginFail");
      }), 500)
    })
  };

  return (
    <div id="loginModal" onClick={e => e.stopPropagation()} hidden>
      <div id="loginWrapper">
        <div>
          Log In
        </div>
        <input id="loginUsername" type="text" placeholder="Username"></input>
        <br/>
        <input id="loginPassword" type="password" placeholder="Password"></input>
        <div>
          <button id="modalLoginButton" onClick={authorize}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;