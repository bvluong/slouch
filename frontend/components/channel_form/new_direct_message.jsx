import React from 'react';

const NewDirectMessage = ({user, removeHandler}) => (
  <li
    className="input-icon"
    onClick={removeHandler(user)}>
    <img className={`user-icon ${
        ["red", "blue", "orange", "green",
         "yellow", "pink", "teal", "grey"]
        [user.id % 8]}`}
       src={user.avatar}/>
    <span>{user.username}</span>
  </li>
);

export default NewDirectMessage;
