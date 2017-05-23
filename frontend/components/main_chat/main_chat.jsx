import React from 'react';
import MessageIndexContainer from './message_index_container';
import { merge } from 'lodash';
import ReactEmoji from 'react-emoji';

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

  addEmoji(emoji) {
    return e => {
    e.preventDefault();
    this.setState({body: (this.state.body+emoji) });
  };
  }

  emojiChoices() {
    return (
    <ul className="emoji-box"> {
    [':smirk:',':heart_eyes:',':kissing_heart:',
    ':flushed:',':relieved:',
    ':grin:',':wink:',
    ':stuck_out_tongue_closed_eyes:',':grinning:',
    ':kissing_smiling_eyes:',':stuck_out_tongue:',
    ':worried:',':frowning:',
    ':open_mouth:',':grimacing:'].map( (emoji,idx) => <li key={idx} onClick={this.addEmoji(emoji)}> {ReactEmoji.emojify(emoji)} </li>)
    } </ul>
  );
  }


  render () {
    const { currentChannel } = this.props;
    const emojis = this.state.showEmojis ? this.emojiChoices() : "" ;
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
              {emojis}
         </div>
      </div>
    );
  }
}

export default MainChat;
