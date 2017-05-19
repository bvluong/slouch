import React from 'react';
import ReactDOM from 'react-dom';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: 0 };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    if (this.props.currentChannel.id !== this.state.id) {
      this.props.fetchMessages(this.props.currentChannel.id)
      .then(this.setState({id:this.props.currentChannel.id}));
    }
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
