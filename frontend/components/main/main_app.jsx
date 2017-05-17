import React from 'react';
import MainNav from '../main_nav/main_nav';
import MainHeaderContainer from '../main_header/main_header_container';

class MainApp extends React.Component {
  render() {
    return (
    <div className="main-app">
      <MainNav/>
      <MainHeaderContainer/>
    </div>
  );}
}

export default MainApp;
