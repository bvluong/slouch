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
    const { currentChannel, currentUser } = this.props;
    const { name, description } = currentChannel;
    const displayname = name.replace(`${currentUser.username},`,"")
        .replace(`,${currentUser.username}`,"")
        .replace(currentUser.username,"");
    return (
    <div className="main-header">
      <div className="left-main-header">
        <div className="channel-name">
          { currentChannel.private ? "@" : "#" }
          { displayname === "" ? currentUser.username : displayname }
        </div>
        <section className="main-header-detail">
          <img className="user-count-avatar"
            src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495046454/avatar_thnwbt.png"/>
          <span className="channel-user-count">{currentChannel.users.length} | </span>

          <span>
            <img src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495582280/nyanparrot_khcpab.gif"/>
            {description}
            <img src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495578902/partyparrot_dtebhb.gif" />
          </span>

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
