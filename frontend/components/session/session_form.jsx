import React from 'react';
import SessionFormInput from './session_form_input';
import HomeHeader from '../home/home_header';

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
    const { formType, errors } = this.props;
    const { username, password } = this.state;
    const mapErrors = errors.map( (err,idx) => <h2 className="errors" key={idx}>{err}</h2>);
    const header = (formType==="login") ? "Login" : "Sign up";
    // <div className="welcome-logo">
    //   <img className="logo-2"
    //     src="https://res.cloudinary.com/djrgebhxz/image/upload/v1495496494/s-logo-5_yz28wf.png"/>
    //   <span>louch</span>
    // </div>
    //
    // <h2>Slouch is a real time web chatting clone of Slack.</h2>
    return (
      <div className="home-background">
        <HomeHeader/>
        <div className="home-form">
            {mapErrors}
          <h3>{header}</h3>
          <SessionFormInput username={username}
            password={password}
            header={header}
            updateHandler={this.updateHandler}
            submitHandler={this.submitHandler}/>
        </div>
      </div>
    );
  }
}

export default SessionForm;
