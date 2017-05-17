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
      <section className="MainHeaderDetail">
        <h3>{name}</h3>
        <span>{currentChannel.users.length}</span>
        <span>{description}</span>
      </section>

      <button onClick={this.logoutHandler.bind(this)}
        className="logout"
        type="button">
        Logout
      </button>

    </div>
  );}
}

export default MainHeader;
