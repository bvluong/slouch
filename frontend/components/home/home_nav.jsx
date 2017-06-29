import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class HomeNav extends React.Component {

  demoHandler(e) {
    e.preventDefault();
    this.props.login({username: "Marcus Aurelius", password:"password"})
    .then(this.props.history.replace("/main"));
  }

  demoHandler2(e) {
    e.preventDefault();
    this.props.login({username: "Seneca", password:"password"})
    .then(this.props.history.replace("/main"));
  }

  render() {
    return(
    <div className="home-nav">
        <div className="header-button">
        <button className="home-button" id="submit-button"
          onClick={this.demoHandler.bind(this)}
          type="button">Guest</button>
        <button className="home-button" id="submit-button"
          onClick={this.demoHandler2.bind(this)}
            type="button">Guest 2</button>
        </div>
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
