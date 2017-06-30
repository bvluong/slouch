import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class HomeNav extends React.Component {

  render() {
    return(
    <div className="home-nav">
        <div className="header-button">
          <Link to="/login">
            <button type="button" id="submit-button"
              className="home-button">Login</button>
          </Link>

          <Link to="/signup">
            <button type="button" id="submit-button"
              className="home-button">Signup</button>
          </Link>
        </div>
    </div>
  );}
}

export default withRouter(HomeNav);
