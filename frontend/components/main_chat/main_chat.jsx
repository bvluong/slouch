import React from 'react';
import MessageIndexContainer from './message_index_container';
import { merge } from 'lodash';
import ReactEmoji from 'react-emoji';
import { Picker } from 'emoji-mart';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", showEmojis: false};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.showEmojis = this.showEmojis.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.hideEmojis = this.hideEmojis.bind(this);
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
    this.setState({showEmojis: !this.state.showEmojis},
      ()=> this.refs.emojilist.focus());
  }

  addEmoji(e) {
    this.setState({body: (this.state.body+e.native) });
    this.setState({showEmojis: false});
  }

  emojiChoices() {
    return (
      <div className="emoji-mart" tabIndex="0" ref="emojilist" onBlur={this.hideEmojis}>
          <Picker set='emojione'
             style={{background:'white',
             width: '220px',
             height: '200px',
             bottom: '32px',
             right: '-13px',
             border: '1px solid grey',
             borderRadius: "5px",
             padding: '0px',
             margin: '0px',
             overflow: 'scroll'}}
             onClick={this.addEmoji}/>
      </div>
  );
  }

  hideEmojis(e) {
      e.preventDefault();
      this.setState({showEmojis: false});
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
                type="text"/>
              <input type="submit" value=""/>
            </form>

            <div className="emoji-button-relative">
            <button type="button"
              className="emoji-button"
              onClick={this.showEmojis}>
                <i className="fa fa-smile-o"
                  id="emoji-icon"
                  aria-hidden="true"/>
            </button>

              {emojilist}
            </div>

         </div>
      </div>
    );
  }
}

export default MainChat;
