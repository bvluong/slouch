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
    const header = (formType==="login") ? "Please Login" : "Create An Account";
    return (
      <div className="home-form">
        <h1>{header}</h1>
        <form onSubmit={this.submitHandler} >
          <input type="text"
            placeholder="username"
            onChange={this.updateHandler("username")}
            value={ username } />
          <input type="password"
            placeholder="password"
            onChange={this.updateHandler("password")}
            value={ password }
            />
          <input type="submit" value={formType}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
