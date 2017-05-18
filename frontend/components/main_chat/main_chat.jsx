import React from 'react';
import MessageIndexContainer from './message_index_container';
import { merge } from 'lodash';

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
    e.preventDefault();
    const newmessage = merge(this.state,
    { channel_id: this.props.currentChannel.id });
    this.props.createMessage(newmessage)
    .then(this.setState({ body: "" }));
  }

  render () {
    const { currentChannel } = this.props;
    return (
      <div className="main-chat">
        <MessageIndexContainer currentChannel={currentChannel}/>
        <div className="main-chat-submit">
            <form onSubmit={this.submitHandler}>
              <input className="message-submit"
                placeholder={`Message #${currentChannel.name}`}
                onChange={this.updateHandler}
                value={this.state.body}
              type="text"></input>
            <input type="submit" value=""/>
            </form>
         </div>
      </div>
    );
  }
}

export default MainChat;
