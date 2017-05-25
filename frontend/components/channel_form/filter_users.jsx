import React from 'react';

const FilterUsers = ({user, userHandler, idx}) => (
  <li>
    <button className={`user-button ${["color1", "color2"][ idx % 2]}`}
      type="button"
      onClick={userHandler(user)}>

    <img className={`user-icon ${
        ["red", "blue", "orange", "green",
        "yellow", "pink", "teal", "grey"][user.id % 8]}`}
       src={user.avatar}/>
     <ul className="channel-icon">
         <li>{user.username}</li>
       </ul>
    </button>
  </li>
);

export default FilterUsers;
