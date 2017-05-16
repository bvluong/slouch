import React from 'react';
import HomeHeader from './home_header';

class HomeIndex extends React.Component {

  render() {

    return(
    <div className="home-index" >
      <HomeHeader/>
      <div>
        <video poster="http://i.imgur.com/eZuPUvG.pngs" id="bgvid" muted loop>
          <source src="http://i.imgur.com/eZuPUvG.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );}
}

export default HomeIndex;
