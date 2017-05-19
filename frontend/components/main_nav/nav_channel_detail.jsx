import React from 'react';


class NavChannelDetail extends React.Component {
  constructor(props) {
    super(props);
    this.updateChannel = this.updateChannel.bind(this);
  }

  updateChannel(e) {
    e.preventDefault(e);
    this.props.fetchChannel(e.target.value);
  }


  render () {
    const { userChannels } = this.props;
    const channel_names = userChannels.map(
      channel =>
      <li
        onClick={this.updateChannel}
        className="channel-detail"
        key={channel.id} value={channel.id}>
        # {channel.name}
      </li>);
    return (
      <ul className="all-channels">
        {channel_names}
      </ul>
    );
  }
}




export default NavChannelDetail;
