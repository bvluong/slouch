import React from 'react';

const FilterUsers = ({user, userHandler}) => (
  <li>
    <button className="user-button"
      type="button"
      onClick={userHandler(user)}>

    <img className={`user-icon ${
        ["red", "blue", "orange", "green",
        "yellow", "pink", "teal", "grey"][user.id % 8]}`}
       src={user.avatar}/>
    <span>{user.username}</span>
    </button>
  </li>
);

export default FilterUsers;
