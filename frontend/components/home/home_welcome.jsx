import React from 'react';
import { Link } from 'react-router-dom';

const HomeWelcome = () => (
  <div className="home-form">
    <div className="home-welcome">
      <h1>Where work happens.</h1>
      <h2>Slouch is a real time chatting application clone of Slack.</h2>
      <Link to="/signup">
        <input id="start-button" className="home-button" type="submit" value="Try out Slouch"/>
      </Link>
    </div>
  </div>
);

export default HomeWelcome;
