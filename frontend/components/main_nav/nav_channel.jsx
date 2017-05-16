import React from 'react';

class NavChannel extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels } = this.props;
    const channel_names = channels.map(
      channel => <li key={channel.id}>{channel.name}</li>);
    return (
      <div className="nav-channels">
        <ul className="all-channels">
          {channel_names}
        </ul>
      </div>
    );
  }

}

export default NavChannel;
