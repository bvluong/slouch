import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import ChannelFormContainer from './channel_form/channel_form_container';
import HomeIndexContainer from './home/home_index_container';
import HomeWelcome from './home/home_welcome';
import MainApp from './main/main_app';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route path ='/form' component={ChannelFormContainer}/>
      <ProtectedRoute path='/main' component={MainApp}/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <AuthRoute path='/' component={HomeIndexContainer}/>
      </Switch>
  </div>
);

export default App;
