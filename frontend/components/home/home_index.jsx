import React from 'react';
import HomeHeader from './home_header';

class HomeIndex extends React.Component {

  render() {
    return(
    <div className="home-index" >
      <HomeHeader/>
      <div>
        <video id="myVideo" poster="assets/neon_rain.png" id="bgvid" muted autoPlay>
          <source src="assets/pink_smoke_6.mp4" type="video/mp4" autoPlay/>
        </video>

      </div>
    </div>
  );}
}

export default HomeIndex;
