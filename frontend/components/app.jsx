import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HomeIndexContainer from './home/home_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
      <Route path='/' component={HomeIndexContainer}/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
