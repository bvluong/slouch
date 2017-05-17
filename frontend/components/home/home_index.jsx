import React from 'react';
import HomeHeader from './home_header';

class HomeIndex extends React.Component {

  render() {
    return(
    <div className="home-index" >
      <HomeHeader/>
      <div className="shadow">
        <video id="bgvid" muted autoPlay loop>
          <source src="http://res.cloudinary.com/djrgebhxz/video/upload/v1495045935/laptop_wqw4yx.mp4" type="video/mp4" autoPlay />
        </video>

      </div>
    </div>
  );}
}

export default HomeIndex;
