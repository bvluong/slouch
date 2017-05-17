import React from 'react';

const NavHeader = ({ currentUser }) => (
  <div className="nav-header">
    <div className="nav-header-logo">
      <img className="main-logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495046831/color_icon_2_xvruhn.png"/>
      <span>Slouch</span>
    </div>
    <span>Hi, {currentUser.username}</span>
  </div>
);


export default NavHeader;
