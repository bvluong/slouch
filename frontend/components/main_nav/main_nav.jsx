import React from 'react';
import MainNavChannelContainer from './main_nav_channel_container';
import MainNavHeaderContainer from './main_nav_header_container';

class MainNav extends React.Component {
  render() {
    return (
      <div className="main-nav">
        <MainNavHeaderContainer/>
        <MainNavChannelContainer/>
      </div>
    );
  }
}

export default MainNav;
