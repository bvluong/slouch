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
    const channel_names = userChannels.map(
      channel =>
      <li
        onClick={this.updateChannel}
        className={(this.state.channel_id===channel.id) ?
          this.state.classname : "channel-detail"}
        key={channel.id} value={channel.id}>
        # {channel.name}
      </li>
  );
    console.log(this.state);
    return (
      <ul className="all-channels">
        {channel_names}
      </ul>
    );
  }
}




export default NavChannelDetail;
