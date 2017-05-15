import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <h1>Slouch</h1>
    <Switch>
      <Route path='/login' component={SessionFormContainer}/>
      <Route path='/signup' component={SessionFormContainer}/>
    </Switch>
  </div>
);

export default App;
