import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.setState({username: "", password: ""}));
  }

  render() {
    const { formType } = this.props;
    const { username, password } = this.state;
    const { errors } = this.props;
    const mapErrors = errors.map( (err,idx) => <h2 className="errors" key={idx}>{err}</h2>);
    const header = (formType==="login") ? "Login" : "Signup";
    return (
      <div className="home-form">
          <div className="welcome-logo"><img className="logo-2" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495145507/imageedit_11_5457561712_jy5jds.png"/>
            <span>louch</span>
          </div>
        <h2>Slouch is a real time web chatting clone of Slack.</h2>
        {mapErrors}
        <h3>{header}</h3>
        <form onSubmit={this.submitHandler} >
          <input type="text"
            id="label-text"
            placeholder="Username"
            onChange={this.updateHandler("username")}
            value={ username } />
          <input type="password"
            id="label-text"
            placeholder="Password"
            onChange={this.updateHandler("password")}
            value={ password }
            />
          <input id="submit-button" className="home-button" type="submit" value="Continue ->"/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
