import React from 'react';
import HomeHeader from './home_header';

class HomeIndex extends React.Component {

  render() {

    return(
    <div className="home-index" >
      <HomeHeader/>
      <div>
        <video poster="assets/neon_rain.png" id="bgvid" muted autoPlay loop>
          <source src="assets/neon_rain2.mp4" type="video/mp4" autoPlay/>
        </video>
      </div>
    </div>
  );}
}

export default HomeIndex;
