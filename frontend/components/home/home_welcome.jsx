import React from 'react';
import { Link } from 'react-router-dom';

const HomeWelcome = () => (
  <div className="home-form">
    <div className="home-welcome">
      <div className="welcome-logo"><img className="logo-2" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495145507/imageedit_11_5457561712_jy5jds.png"/>
        <span>louch</span>
      </div>
      <h2>Slouch is a real time chatting application clone of Slack.</h2>
      <Link to="/signup">
        <input id="start-button" className="home-button" type="submit" value="Try out Slouch"/>
      </Link>
    </div>
  </div>
);

export default HomeWelcome;
