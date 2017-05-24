import React from 'react';

const MessageAvatar = ({message}) => {
  const COLORS = ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"];
  const colorClass = COLORS[(message.id % 8)];
  return (
  <img className={`user-icon ${colorClass}`} src={message.avatar}/>
  );
};

export default MessageAvatar;
