import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HomeIndexContainer from './home/home_index_container';
import MainApp from './main/main_app';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path='/main' component={MainApp}/>
      <AuthRoute path='/' component={HomeIndexContainer}/>
    </Switch>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
