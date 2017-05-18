import React from 'react';
import MessageIndexContainer from './message_index_container';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: ""};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.currentChannel.id);
  }

  updateHandler(e) {
    this.setState({body: e.target.value});
  }

  submitHandler(e) {

  }

  render () {
    const { currentChannel } = this.props;
    return (
      <div className="main-chat">
        <MessageIndexContainer currentChannel={currentChannel}/>
        <div className="main-chat-submit">
            <input className="message-submit"
              placeholder={`message #${currentChannel.name}`}
              onChange={this.updateHandler}
              value={this.state.body}
              type="text"></input>
         </div>
      </div>
    );
  }
}

export default MainChat;
