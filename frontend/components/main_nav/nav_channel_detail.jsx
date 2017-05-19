import React from 'react';
import ReactDOM from 'react-dom';


class NavChannelDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classname: "channel-detail active", channel_id: 1 };
    this.updateChannel = this.updateChannel.bind(this);
  }

  updateChannel(e) {
    e.preventDefault(e);
    this.props.fetchChannel(e.target.value);
    this.setState(
      { classname: "channel-detail active",
        channel_id: e.target.value });
  }


  render () {
    const { userChannels } = this.props;
    const public_channels = userChannels.filter( channel => !channel.private );
    const private_channels = userChannels.filter( channel => channel.private );

    const channel_names = public_channels.map(
      channel =>
      <li
        onClick={this.updateChannel}
        className={(this.state.channel_id===channel.id) ?
          this.state.classname : "channel-detail"}
        key={channel.id} value={channel.id}>
        # {channel.name}
      </li>
  );
  const direct_messages = private_channels.map(
    channel =>
    <li
      onClick={this.updateChannel}
      className={(this.state.channel_id===channel.id) ?
        this.state.classname : "channel-detail"}
      key={channel.id} value={channel.id}>
      @ {channel.name}
    </li>
);

    return (
      <div>
        <ul className="all-channels">
          {channel_names}
        </ul>
        <h2> direct messages </h2>
        <ul className="all-channels">
          {direct_messages}
        </ul>
      </div>
    );
  }
}




export default NavChannelDetail;
