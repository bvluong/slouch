import React from 'react';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: 0 };
  }

  componentWillReceiveProps() {
    if (this.props.currentChannel.id !== this.state.id) {
      this.props.fetchMessages(this.props.currentChannel.id)
      .then(this.setState({id:this.props.currentChannel.id}));
    }

  }

  render() {
    const { messages } = this.props;
    console.log(this.props);
    const mapmessages = messages.map(message => <ul
      key={message.id}>
      <div className="message-box">
        <img className="avatar" src={message.avatar}/>
        <li>
          <ul className="message-info">
            <li> {message.username} </li>
            <li className="time-stamp"> {message.time_stamp} </li>
          </ul>
        <p className="message-body"> {message.body} </p>
        </li>
      </div>
    </ul>);
    return (
      <div className="message-index">
        {mapmessages}
      </div>
    );
  }
}

export default MessageIndex;
