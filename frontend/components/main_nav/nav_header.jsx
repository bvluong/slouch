import React from 'react';

const NavHeader = ({ currentUser }) => (
  <div className="nav-header">
    <div className='nav-logo'>
        <img className="logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495145507/imageedit_11_5457561712_jy5jds.png"/>
        <span>louch</span>
    </div>
    <div className="nav-current-user">
      <img className="green-circle" src="http://www.iconsdb.com/icons/preview/color/38978D/circle-xxl.png"/>
      <span>{currentUser.username}</span>
    </div>
  </div>
);


export default NavHeader;
