import React from 'react';

class FindChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channel_name: "",
      searchchannels: []};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.mapChannels = this.mapChannels.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
    const searchchannels = this.mapChannels(this.props.channels);
    this.setState({ searchchannels } );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channels.length !== nextProps.channels.length ) {
      const searchchannels = this.mapChannels(nextProps.channels);
      this.setState({ searchchannels } );
    }
  }


  mapChannels(channels) {
    const user_channel_id = this.props.currentUser.channels.map(channel => channel.id);
    const filter_channels = channels.filter(channel =>
      (!channel.private && !user_channel_id.includes(channel.id) ));
    return filter_channels.map( (channel,idx) =>
      <li key={channel.id}>
        <button className="find-channel-button" type="button" onClick={this.submitHandler(channel)}>
         <span
           className={`channel-icon ${
         ["color1", "color2"]
         [ idx % 2]}`}># {channel.name}</span>
        </button>
      </li>);
  }


  updateHandler(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      const filter_channels = this.props.channels.filter(channel => channel.name.toLowerCase().includes(e.target.value) );
      const searchchannels = this.mapChannels(filter_channels);
      this.setState({ searchchannels } );
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
              { this.state.searchchannels }
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default FindChannel;
