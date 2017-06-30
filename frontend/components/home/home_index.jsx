import React from 'react';
import HomeHeader from './home_header';
import HomeFooter from './home_footer';
import { Link } from 'react-router-dom';

class HomeIndex extends React.Component {

  render() {
    // https://res.cloudinary.com/djrgebhxz/video/upload/e_saturation:-50,e_contrast:-35,e_brightness:-20/v1495045935/laptop_wqw4yx.mp4
    return(
    <div className="home-whole">

        <div className="shadow">
          <div className="splash">
            <div className="splash_logo">
              Slouch
            </div>
            <div className="splash_svg">
              <svg width="100%" height="100%">
                <rect width="100%" height="100%" />
          	  </svg>
            </div>
            <div className="splash_minimize">
              <svg width="100%" height="100%">
                <rect width="100%" height="100%" />
          	  </svg>
            </div>
          </div>
          <div className="text">
            <p>
              A Real Time
            </p>
            <p>Messaging</p>
            <p>Web App</p>
            <Link to="/signup">
              <button>Explore</button>
            </Link>
          </div>

        </div>
    </div>
  );}
}

export default HomeIndex;
