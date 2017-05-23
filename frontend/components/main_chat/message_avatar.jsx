import React from 'react';

const MessageAvatar = ({message}) => (
  <img className={`user-icon ${
      ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
      [Math.floor(Math.random() * 8)]}`} src={message.avatar}/>
  );

export default MessageAvatar;
