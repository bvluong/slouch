import React from 'react';
import ReactEmoji from 'react-emoji';

const MessageBody = ({ message, removeEmoji }) => (
  <li>
    <ul className="message-info">
      <li> <span>{message.username}</span>  </li>
      <li className="time-stamp"> {
      new Date(message.time_stamp)
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")} </li>
    </ul>
    <p className="message-body"> {ReactEmoji.emojify(message.body)} </p>
    <ul className="emoji-body">
      { message.reactions ? message.reactions.map(reaction => <li className="message-emoji" onClick={removeEmoji(reaction.id)} key={reaction.id}>{reaction.emoji}</li>) : []}
    </ul>
  </li>
);


export default MessageBody;
