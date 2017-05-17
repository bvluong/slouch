import React from 'react';
import NavChannelDetailContainer from './nav_channel_detail_container';

class NavChannel extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels, userChannels } = this.props;
    return (
      <div className="nav-channels">
        <h2> Channels <span className="channel-length">({channels.length})</span></h2>
        <NavChannelDetailContainer/>
      </div>
    );
  }
}

export default NavChannel;
