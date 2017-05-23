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
    console.log(emojis[0]);
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

// [`:blush:`,`:smiley:`,`:relaxed:`,`:smirk:`,`:heart_eyes:`,`:kissing_heart:`,`:kissing_closed_eyes:`,`:flushed:`,`:relieved:`,`:satisfied:`,`:grin:`,`:wink:`,`:stuck_out_tongue_winking_eye:`,`:stuck_out_tongue_closed_eyes:`,`:grinning:`,`:kissing:`,`:kissing_smiling_eyes:`,`:stuck_out_tongue:`,`:sleeping:`,`:worried:`,`:frowning:`,`:anguished:`,`:open_mouth:`,`:grimacing:`,`:confused:`,
// `:hushed:`,`:expressionless:`,`:unamused:`,`:sweat_smile:`,`:sweat:`,`:disappointed_relieved:`,`:weary:`,`:pensive:`,`:disappointed:`,`:confounded:`,`:fearful:`,`:cold_sweat:`,`:persevere:`,`:cry:`,`:sob:`,`:joy:`,`:astonished:`,`:scream:`,`:tired_face:`,`:angry:`,`:rage:`,`:triumph:`,`:sleepy:`,`:yum:`,`:mask:`,`:sunglasses:`,`:dizzy_face:`,`:imp:`,`:smiling_imp:`,
// `:neutral_face:`,`:no_mouth:`,`:innocent:`,`:alien:`,`:yellow_heart:`,`:blue_heart:`,`:purple_heart:`,`:heart:`,`:green_heart:`,`:broken_heart:`,`:heartbeat:`,`:heartpulse:`,`:two_hearts:`,`:revolving_hearts:`,`:cupid:`,`:sparkling_heart:`,`:sparkles:`,`:star:`,`:star2:`,`:dizzy:`,`:boom:`,`:collision:`,`:anger:`,`:exclamation:`,`:question:`,`:grey_exclamation:`,`:grey_question:`,
// `:zzz:`,`:dash:`,`:sweat_drops:`,`:notes:`,`:musical_note:`,`:fire:`,`:hankey:`,`:poop:`,`:shit:`,`:+1:`,`:thumbsup:`,`:-1:`,`:thumbsdown:`,`:ok_hand:`,`:punch:`,`:facepunch:`,`:fist:`,`:v:`,`:wave:`,`:hand:`,`:raised_hand:`,`:open_hands:`,`:point_up:`,`:point_down:`,`:point_left:`,`:point_right:`,`:raised_hands:`,`:pray:`,`:point_up_2:`,`:clap:`,`:muscle:`,`:fu:`,
// `:walking:`,`:runner:`,`:running:`,`:couple:`,`:family:`,`:two_men_holding_hands:`,`:two_women_holding_hands:`,`:dancer:`,`:dancers:`,`:ok_woman:`,`:no_good:`,`:information_desk_person:`,`:raising_hand:`,`:bride_with_veil:`,`:person_with_pouting_face:`,`:person_frowning:`,`:bow:`,`:couplekiss:`,`:couple_with_heart:`,`:massage:`,`:haircut:`,`:nail_care:`,`:boy:`,`:girl:`,
// `:woman:`,`:man:`,`:baby:`,`:older_woman:`,`:older_man:`,`:person_with_blond_hair:`,`:man_with_gua_pi_mao:`,`:man_with_turban:`,`:construction_worker:`,`:cop:`,`:angel:`,`:princess:`,`:smiley_cat:`,`:smile_cat:`,`:heart_eyes_cat:`,`:kissing_cat:`,`:smirk_cat:`,`:scream_cat:`,`:crying_cat_face:`,`:joy_cat:`,`:pouting_cat:`,`:japanese_ogre:`,`:japanese_goblin:`,`:see_no_evil:`,
// `:hear_no_evil:`,`:speak_no_evil:`,`:guardsman:`,`:skull:`,`:feet:`,`:lips:`,`:kiss:`,`:droplet:`,`:ear:`,`:eyes:`,`:nose:`,`:tongue:`,`:love_letter:`,`:bust_in_silhouette:`,`:busts_in_silhouette:`,`:speech_balloon:`,`:thought_balloon:`]
