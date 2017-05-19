import React from 'react';
import ReactDOM from 'react-dom';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: 0 };
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.currentChannel.id);
    this.setupSubscription();
  }

  componentWillUnmount() {
    App.messages.perform("unsubscribed");
  }

  updateMessages(data) {
    this.props.receiveMessage(data);
  }

  setupSubscription() {
    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      channel_id: this.props.currentChannel.id,
      connected: function () {
        this.perform("follow",
        { channel_id: this.channel_id });
      },
      received: function(data) {
        this.updateMessages(data);
      },
      updateMessages: this.updateMessages
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentChannel.id !== nextProps.currentChannel.id) {
      App.messages.perform("follow",
      { channel_id: nextProps.currentChannel.id});
      this.props.fetchMessages(nextProps.currentChannel.id);
    }
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom () {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
}

  render() {
    const { messages } = this.props;
    const mapmessages = messages.map(message => <ul
      key={message.id}>
      <div className="message-box">
        <img className="avatar" src={message.avatar}/>
        <li>
          <ul className="message-info">
            <li> <span>{message.username}</span>  </li>
            <li className="time-stamp"> {message.time_stamp} </li>
          </ul>
        <p className="message-body"> {message.body} </p>
        </li>
      </div>
    </ul>);
    return (
      <div className="message-index">
        {mapmessages}
        <div ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}

export default MessageIndex;
