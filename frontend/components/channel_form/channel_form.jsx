import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel_name: "",
      searchusers: [],
      newchannel: []};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length) {
      const searchusers = nextProps.users.map(user =>
        <li key={user.id}>
          <button className="user-button" type="button">
          <img className={`user-icon ${
              ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
              [Math.floor(Math.random() * 8)]}`}
             src={user.avatar}/>
          <span>{user.username}</span>
          </button>
        </li>);
      this.setState({ searchusers } );
    }
  }


  updateHandler(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      const filter_users = this.props.users.filter(user => user.username.toLowerCase().includes(e.target.value) );
      const searchusers = filter_users.map(user =>
        <li key={user.id}>
          <button className="user-button" type="button">
          <img className={`user-icon ${
              ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
              [Math.floor(Math.random() * 8)]}`}
              src={user.avatar}/>
          <span>{user.username}</span>
          </button>
        </li>);
      this.setState({ searchusers } );
    };
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.setState({channel_name: ""}));
  }

  render() {
    const { users } = this.props;
    return (
      <div className="channel-form-page">
        <div className="channel-form">

          <div className="channel-submit">
            <form className ="channel-submit-form" onSubmit={this.submitHandler}>
              <input className="input-channel" type="text"
                placeholder="Find or start a conversation"
                onChange={this.updateHandler("channel_name")}
                value={this.state.channel_name} />
              <input className="channel-button" type="submit" value="Go"/>
            </form>
          </div>

          <div className="user-names">
            <ul className="user-names-details">
              { this.state.searchusers }
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default ChannelForm;
