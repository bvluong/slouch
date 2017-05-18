import React from 'react';
import MessageIndexContainer from './message_index_container';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { currentChannel } = this.props;
    return (
      <div className="main-chat">
        <MessageIndexContainer currentChannel={currentChannel}/>
        placeholder

      </div>
    );
  }
}

export default MainChat;
