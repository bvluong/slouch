import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //  testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;


  ReactDOM.render(<div>Working</div>, root);
});

//testing
import { login, signup, logout } from './util/session_api_util';
