import React from 'react';
import MessageIndexContainer from './message_index_container';
import { merge } from 'lodash';
import ReactEmoji from 'react-emoji';
import emojis from 'emojis-list';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", showEmojis: false};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.showEmojis = this.showEmojis.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
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

  showEmojis() {
    this.setState({showEmojis: !this.state.showEmojis});
  }

  addEmoji(emo) {
    return e => {
    e.preventDefault();
    this.setState({body: (this.state.body+emo) });
  };
  }

  emojiChoices() {
    return (
    <ul className="emoji-box"> <h4>Choose an emoji</h4>
    {emojis.slice(1634,2000)
    .map( (emo,idx) => <li key={idx}
      onClick={this.addEmoji(emo)}>{emo}</li>)}
    </ul>
  );
  }


  render () {
    const { currentChannel } = this.props;
    const emojilist = this.state.showEmojis ? this.emojiChoices() : "" ;
    return (
      <div className="main-chat">
        <MessageIndexContainer currentChannel={currentChannel}/>
        <div className="main-chat-submit">
            <form onSubmit={this.submitHandler}>
              <input className="message-submit" autoFocus
                placeholder={`Message #${currentChannel.name}`}
                onChange={this.updateHandler}
                value={this.state.body}
              type="text"></input>
            <input type="submit" value=""/>
            </form>
            <button type="button" className="emoji-button" onClick={this.showEmojis}>
                <i className="fa fa-smile-o" id="emoji-icon" aria-hidden="true"></i>
              </button>
              {emojilist}
         </div>
      </div>
    );
  }
}

export default MainChat;
