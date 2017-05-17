import React from 'react';

const NavHeader = ({ currentUser }) => (
  <div className="nav-header">
    <div className="nav-header-logo">
      <img className="main-logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495046831/color_icon_2_xvruhn.png"/>
      <span>Slouch</span>
    </div>
    <div className="nav-current-user">
      <img className="green-circle" src="http://www.iconsdb.com/icons/preview/color/38978D/circle-xxl.png"/>
      <span>{currentUser.username}</span>
    </div>
  </div>
);


export default NavHeader;
