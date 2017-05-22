import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel_name: "",
      searchusers: [],
      selected_userid: [],
      selected_users: [],
      render: false};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.userHandler = this.userHandler.bind(this);
    this.mapUsers = this.mapUsers.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    const searchusers = this.mapUsers(this.props.users);
    this.setState({ searchusers } );
    this.setState({ selected_userid: [this.props.currentUser.id]
    } );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length ) {
      const searchusers = this.mapUsers(nextProps.users);
      this.setState({ searchusers } );
    }
  }

  componentDidUpdate() {
    if (this.state.render) {
      this.setState({render:false});
      const searchusers = this.mapUsers(this.props.users);
      this.setState({ searchusers } );
    }
  }

  userHandler(user) {
    return e => {
    const selected_userid = this.state.selected_userid.concat(user.id);
    const selected_users = this.state.selected_users.concat(user);
    this.setState({
      channel_name: "",
      selected_userid,
      selected_users,
      render: true
    });
  };
  }

  removeHandler(user) {
    return e => {
      const userid_index = this.state.selected_userid.indexOf(user.id);
      const user_index = this.state.selected_users.indexOf(user);
      const selected_userid = this.state.selected_userid;
      selected_userid.splice(userid_index,1);
      const selected_users = this.state.selected_users;
      selected_users.splice(user_index, 1);
      this.setState({
        selected_userid,
        selected_users,
        render: true
      });
    };
  }

  mapUsers(users) {
    const filter_users = users.filter(user =>
      (!this.state.selected_userid.includes(user.id) && user.id !== this.props.currentUser.id));
    return filter_users.map(user =>
      <li key={user.id}>
        <button className="user-button" type="button" onClick={this.userHandler(user)}>
        <img className={`user-icon ${
            ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
            [Math.floor(Math.random() * 8)]}`}
           src={user.avatar}/>
        <span>{user.username}</span>
        </button>
      </li>);
  }


  updateHandler(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      const filter_users = this.props.users.filter(user => user.username.toLowerCase().includes(e.target.value) );
      const searchusers = this.mapUsers(filter_users);
      this.setState({ searchusers } );
    };
  }

  submitHandler(e) {
    e.preventDefault();
    let name = this.state.selected_users.map(user => user.username).join(",");
    name = `${this.props.currentUser.username},${name}`;
    this.props.createChannel({private: true,
      user_id: this.state.selected_userid,
      description: "",
      name
    }).then(this.props.closeModal());
  }

  render() {
    const { users } = this.props;
    return (
      <div className="channel-form-page">
        <div className="channel-form">

          <div className="channel-submit">
            <div className="channel-form-top">
            <h3>Direct Messages</h3>
              <form className ="channel-submit-form" onSubmit={this.submitHandler}>
                <div className='input-bar'>

                  <ul className="new-channel">
                  { this.state.selected_users.map(user => <li className="input-icon" key={user.username} onClick={this.removeHandler(user).bind(this)}>
                      <img className={`user-icon ${
                          ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
                          [Math.floor(Math.random() * 8)]}`}
                         src={user.avatar}/>
                      <span>{user.username}</span>
                    </li> )}
                  </ul>

                  <input className="input-channel" type="text"
                    placeholder="Find a user"
                    onChange={this.updateHandler("channel_name")}
                    value={this.state.channel_name} />

                </div>
                <input className="channel-button" type="submit" value="Go"/>
            </form>
            </div>
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
