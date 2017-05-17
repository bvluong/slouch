import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class HomeNav extends React.Component {

  demoHandler(e) {
    e.preventDefault();
    this.props.login({username: "Marcus Aurelius", password:"password"})
    .then(this.props.history.replace("/main"));
  }

  render() {
    return(
    <div className="home-nav" >
      <button className="home-button" onClick={this.demoHandler.bind(this)}
        type="button">Demo</button>

      <Link to="/login">
        <button type="button" className="home-button">Login</button>
      </Link>

      <Link to="/signup">
        <button type="button" className="home-button">Sign Up</button>
      </Link>

    </div>
  );}
}

export default withRouter(HomeNav);
