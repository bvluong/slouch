import React from 'react';
import HomeNavContainer from './home_nav_container';
import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {

  render () {
    return (
    <div className='home-header'>
      <div className='left-header'>
        <Link to="/"> <img className="logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495046831/color_icon_2_xvruhn.png"/></Link>
        <Link to="/"> <span>Slouch</span> </Link>
      </div>
      <div className='right-header'>
        <HomeNavContainer/>
      </div>
    </div>
  );}
}

export default HomeHeader;
