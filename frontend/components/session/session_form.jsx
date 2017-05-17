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

  submitHandler(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.setState({username: "", password: ""}));
  }

  render() {
    const { formType } = this.props;
    const { username, password } = this.state;
    const header = (formType==="login") ? "Sign In" : "Login";
    return (
      <div className="home-form">
        <h1>Where work starts.</h1>
        <h2>Slouch lets you get brings everyone </h2>
        <h2>together in one place.</h2>
          <h3>{header}</h3>
        <form onSubmit={this.submitHandler} >
          <input type="text"
            placeholder="Username"
            onChange={this.updateHandler("username")}
            value={ username } />
          <input type="password"
            placeholder="Password"
            onChange={this.updateHandler("password")}
            value={ password }
            />
          <input id="submit-button" className=".home-button" type="submit" value="Continue ->"/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
