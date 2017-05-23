import React from 'react';
import ReactEmoji from 'react-emoji';

class MainHeader extends React.Component {

  componentDidMount() {
    this.props.fetchChannel(this.props.currentChannel.id);
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
        <div className="channel-name">#{name}</div>
        <section className="main-header-detail">
          <img className="user-count-avatar"
            src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495046454/avatar_thnwbt.png"/>
          <span className="channel-user-count">{currentChannel.users.length} | </span>
          <span>{description} {ReactEmoji.emojify(':100:')} </span>
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
