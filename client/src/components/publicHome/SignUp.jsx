import React from 'react';
const axios = require('axios');

const SignUp = ({setUser}) => {

  const register = () => {
    let userInfo = {};
    const email = document.getElementById('signUpEmail');
    const username = document.getElementById('signUpUsername');
    const password = document.getElementById('signUpPassword');

    userInfo.email = email.value;
    userInfo.username = username.value;
    userInfo.password = password.value;

    axios.post('http://localhost:3000/register', userInfo, {headers : {"content-type": "application/json"}})
    .then((response) => {
      if(response.status === 201) {
        setUser(response.data);
      }
    })
    .catch((err) => {
      const modal = document.getElementById('signUpModal');
      modal.classList.add("loginFail");

      setTimeout((() => {
        modal.classList.remove("loginFail");
      }), 500)
    })
  };

  return (
    <div id="signUpModal" onClick={e => e.stopPropagation()} hidden>
      <div id="signUpWrapper">
        <div>
          Sign Up
        </div>
        <input  id="signUpEmail" type="text" placeholder="Email"></input>
        <br/>
        <input id="signUpUsername"type="text" placeholder="Username"></input>
        <br />
        <input id="signUpPassword" type="password" placeholder="Password"></input>
        <div>
          <button id="modalSignUpButton" onClick={register}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;