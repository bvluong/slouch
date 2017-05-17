import React from 'react';

class MainHeader extends React.Component {

  componentDidMount() {
    this.props.fetchChannel(1);
  }

  logoutHandler() {
    this.props.logout();
  }

  render () {
    const { currentChannel } = this.props;
    const { name, description } = currentChannel;
    return (
    <div className="main-header">
      <div className="left-main-header">
        <h3>#{name}</h3>
        <section className="main-header-detail">
          <img className="user-count-avatar" src="assets/avatar.png"/>
          <span className="channel-user-count">{currentChannel.users.length} | </span>
          <span>{description}</span>
        </section>
      </div>

      <button onClick={this.logoutHandler.bind(this)}
        className="logout"
        type="button">
        Logout
      </button>

    </div>
  );}
}

export default MainHeader;
