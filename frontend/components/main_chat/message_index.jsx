import React from 'react';

class MessageIndex extends React.Component {

  componentDidMount() {
    this.props.fetchMessages(this.props.currentChannel.id);
  }

  render() {
    const { messages } = this.props;
    const mapmessages = messages.map(message => <li
      key={message.id}><img src={message.avatar}/>
      <ul>
        <div className="message-info">
          <li> {message.username} </li>
          <li> {message.time_stamp} </li>
        </div>
        <li className="message-body"> {message.body} </li>
      </ul>
    </li>);
    return (
      <div className="message-index">
        {mapmessages}
      </div>
    );
  }
}

export default MessageIndex;
