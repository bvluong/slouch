import React from 'react';
import SessionFormInput from './session_form_input';
import HomeHeader from '../home/home_header';
import { Link, Route, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.demoHandler = this.demoHandler.bind(this);
  }

  updateHandler(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  demoHandler(e) {
    e.preventDefault();
    const demo_names = ["Marcus Aurelius","Seneca","Cleanthes","Epictetus","Zeno","Aristotle","Plato"];
    let demo_name = demo_names[Math.floor(Math.random()*7)];
    this.props.login({username: demo_name, password:"password"})
    .then(this.props.history.replace("/main"));
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
            submitHandler={this.submitHandler}
            demoHandler={this.demoHandler}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
