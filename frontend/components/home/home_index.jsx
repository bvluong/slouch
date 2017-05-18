import React from 'react';
import HomeHeader from './home_header';
import HomeFooter from './home_footer';

class HomeIndex extends React.Component {

  render() {
    // http://res.cloudinary.com/djrgebhxz/video/upload/e_saturation:-50,e_contrast:-35,e_brightness:-20/v1495045935/laptop_wqw4yx.mp4
    return(
    <div className="home-whole">

      <div className="home-index" >
        <HomeHeader/>
      </div>

        <div className="shadow">
          <video id="bgvid" muted autoPlay>
            <source src="http://res.cloudinary.com/djrgebhxz/video/upload/e_saturation:-30,e_contrast:-20,e_brightness:-25/v1495141384/Office_Perks_lnjoct.mp4" type="video/mp4" autoPlay />
          </video>
        </div>
    </div>
  );}
}

export default HomeIndex;
