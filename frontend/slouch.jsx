import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //  testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  const store = configureStore();
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});

//testing
import { login, signup, logout } from './actions/session_actions';
