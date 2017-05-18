import React from 'react';
import HomeNavContainer from './home_nav_container';
import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {

  render () {
    return (
    <div className='home-header'>
      <div className='left-header'>
        <Link to="/">
          <img className="logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495145507/imageedit_11_5457561712_jy5jds.png"/></Link>
        <Link to="/"> <span>louch</span> </Link>
      </div>
      <div className='right-header'>
        <HomeNavContainer/>
      </div>
    </div>
  );}
}

export default HomeHeader;
