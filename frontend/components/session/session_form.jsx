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
    const header = (formType==="login") ? "Login" : "Sign up";
    return (
      <div className="home-form">
          <div className="welcome-logo"><img className="logo-2" src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495496494/s-logo-5_yz28wf.png"/>
            <span>louch</span>
          </div>
        <h2>Slouch is a real time web chatting clone of Slack.</h2>
        {mapErrors}
        <h3>{header}</h3>
        <form onSubmit={this.submitHandler} >
          <label className="label">
            <input type="text" required
              className="form-input"
              id="label-text"
              onChange={this.updateHandler("username")}
              value={ username }/>
            <div className="label-text">Username</div>
          </label>
          <label className="label">
          <input type="password" required
            id="label-text"
            className="form-input"
            onChange={this.updateHandler("password")}
            value={ password }
            />
          <div className="label-text">Password</div>
          </label>
          <input id="submit-button" className="home-button" type="submit" value={header}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
