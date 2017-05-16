import React from 'react';

const NavHeader = ({ currentUser }) => (
  <div className="nav-header">
    <div className="nav-header-logo">
      <img className="logo" src="assets/neon_icon.png"/>
      <span>Slouch</span>
    </div>
    <span>Hi, {currentUser.username}</span>
  </div>
);


export default NavHeader;
