import React from 'react';
import HomeNavContainer from './home_nav_container';

class HomeHeader extends React.Component {

  render () {
    return (
    <div className='home-header'>
      <div className='left-header'>
        <img className="logo" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495046831/color_icon_2_xvruhn.png"/>
        <span>Slouch</span>
      </div>
      <div className='right-header'>
        <HomeNavContainer/>
      </div>
    </div>
  );}
}

export default HomeHeader;
