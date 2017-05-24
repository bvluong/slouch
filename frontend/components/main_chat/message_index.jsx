import React from 'react';
import ReactDOM from 'react-dom';
import ReactEmoji from 'react-emoji';
import emojis from 'emojis-list';
import MessageBody from './message_body';
import MessageAvatar from './message_avatar';



class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: 0, showEmojis: false, message_id: "", content: {} };
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.showEmojis = this.showEmojis.bind(this);
    this.hideEmojis = this.hideEmojis.bind(this);
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

  addEmoji(emo) {
    return e => {
    e.preventDefault();
    const { message_id } = this.state;
    this.setState({showEmojis: false});
    this.props.createReaction({emoji: emo, message_id});
  };
  }

  showEmojis(message_id) {
    return e => {
      e.preventDefault();
      this.setState({showEmojis: !this.state.showEmojis,
          content: {position: 'absolute', top: e.clientY-166, left: e.clientX-50},
        message_id }, ()=> this.refs.emojilist.focus() );

    };
  }

  hideEmojis(e) {
      e.preventDefault();
      this.setState({showEmojis: false});
  }

  emojiChoices() {
    return (
      <ul className="emoji-box" tabIndex="0" ref="emojilist"
        onBlur={this.hideEmojis} style={this.state.content}> <h4>Choose an emoji</h4>
      {emojis.slice(1634,2000)
      .map( (emo,idx) => <li key={idx}
        onClick={this.addEmoji(emo)}>{emo}</li>)}
      </ul>
    );
  }

  render() {
    const { messages } = this.props;
    const mapmessages = messages.map(message => <ul
      key={message.id}>
      <div className="message-box">
        <div className="message-box-info">
          <MessageAvatar message={message}/>
          <MessageBody message={message}/>
        </div>
        <div className="message-emoji-button">
          <button type="button" className="emoji-button"
            onClick={this.showEmojis(message.id)}>
              <i className="fa fa-smile-o" id="emoji-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </ul>);
    return (
      <div className="message-index">
        {mapmessages}
        { this.state.showEmojis ? this.emojiChoices() : ""}
        <div ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}

export default MessageIndex;
