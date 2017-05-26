import React from 'react';
import FilterChannels from './filter_channels';

class FindChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_name: "",
      public_channels: []
    };
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.mapChannels = this.mapChannels.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
    const public_channels = this.mapChannels(this.props.channels);
    this.setState({ public_channels } );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channels.length !== nextProps.channels.length ) {
      const public_channels = this.mapChannels(nextProps.channels);
      this.setState({ public_channels } );
    }
  }

  mapChannels(channels) {
    const user_channel_id = this.props.currentUser.channels.map(channel => channel.id);
    const filter_channels = channels.filter(channel =>
      (!channel.private && !user_channel_id.includes(channel.id) ));
    return filter_channels.map( (channel,idx) =>
      <FilterChannels key={channel.id} channel={channel} idx={idx}
        submitHandler={this.submitHandler}/>
    );
  }

  updateHandler(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      const filter_channels = this.props.channels.filter(channel => channel.name.toLowerCase().includes(e.target.value) );
      const public_channels = this.mapChannels(filter_channels);
      this.setState({ public_channels } );
    };
  }

  submitHandler(channel) {
    return e => {
    e.preventDefault();
    this.props.subscribeChannel(channel.id).then(this.props.closeModal());
  };
  }

  render() {
    const { channels } = this.props;
    return (
      <div className="channel-form-page">
        <div className="channel-form">

          <div className="channel-submit">
            <div className="channel-form-top">
            <h3>Channels</h3>
              <form className ="new-channel-submit-form" onSubmit={this.submitHandler}>
                <div className='input-bar'>

                  <input className="input-channel" type="text"
                    placeholder="Find a channel"
                    onChange={this.updateHandler("channel_name")}
                    value={this.state.channel_name} />

                </div>
            </form>
            </div>
          </div>

          <div className="user-names">
            <ul className="user-names-details">
              { this.state.public_channels }
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default FindChannel;
