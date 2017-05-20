import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel_name: ""};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  updateHandler(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.setState({channel_name: ""}));
  }

  render() {
    const { users } = this.props;
    console.log( users );
    const mapusers = users.map(user =>
      <li key={user.id}>
        <img className="user-icon" src={user.avatar}/>
        <span>{user.username}</span>
      </li>);
    return (
      <div className="channel-form-page">
        <div className="channel-form">
          <div className="channel-submit">
            <form className ="channel-submit-form" onSubmit={this.submitHandler}>
              <input className="input-channel" type="text"
                placeholder="Username"
                onChange={this.updateHandler("channel_name")}
                value={this.state.channel_name} />
              <input className="channel-button" type="submit" value="Go"/>
            </form>
          </div>
          <div className="user-names">
            <ul className="user-names-details">
              {mapusers}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelForm;
