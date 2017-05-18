import React from 'react';
import MainNavChannelContainer from './main_nav_channel_container';
import MainNavHeaderContainer from './main_nav_header_container';
import NavFooter from './nav_footer';

class MainNav extends React.Component {
  render() {
    return (
      <div className="main-nav">
        <div className="nav-top">
          <MainNavHeaderContainer/>
          <MainNavChannelContainer/>
        </div>
        <NavFooter/>
      </div>
    );
  }
}

export default MainNav;
