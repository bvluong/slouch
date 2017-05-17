import React from 'react';

class NavChannel extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels, userChannels } = this.props;
    const channel_names = userChannels.map(
      channel => <li key={channel.id}># {channel.name}</li>);
    console.log(channel_names);
    return (
      <div className="nav-channels">
        <h2> Channels ({channels.length})</h2>
        <ul className="all-channels">
          {channel_names}
        </ul>
      </div>
    );
  }

}

export default NavChannel;
