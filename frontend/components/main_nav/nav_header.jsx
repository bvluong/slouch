import React from 'react';

const NavHeader = ({ currentUser }) => (
  <div className="nav-header">
    <div className='nav-logo'>
        <img className="logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495496494/s-logo-5_yz28wf.png"/>
        <span>louch</span>
    </div>
    <div className="nav-current-user">
      <img className="green-circle" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495219933/circle-xxl_w4vrnb.png"/>
      <span>{currentUser.username}</span>
    </div>
  </div>
);


export default NavHeader;
