import React from 'react';
import { Link } from 'react-router-dom';

const HomeWelcome = () => (
  <div className="home-form">
    <div className="home-welcome">
      <div className="welcome-logo"><img className="logo-2" src="https://res.cloudinary.com/djrgebhxz/image/upload/v1495496494/s-logo-5_yz28wf.png"/>
        <span>louch</span>
      </div>
      <h2>Slouch is a messaging web application inspired by Slack.</h2>
      <Link to="/signup">
        <input id="start-button" className="home-button" type="submit" value="Explore Slouch"/>
      </Link>
    </div>
  </div>
);

export default HomeWelcome;
