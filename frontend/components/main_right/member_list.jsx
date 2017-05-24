import React from 'react';

const MemberList = ({users}) => (
  <div className='member-list'>
    <h4><i className="fa fa-user-o" aria-hidden="true"/> {users.length} Members</h4>
    <ul className='member-details'>
      {users.map(user => <li key={user.id}>
        <img className={`member-icon ${
            ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
            [Math.floor(Math.random() * 8)]}`} src={user.avatar}/>
        <span>{user.name}</span>
      </li>)}
    </ul>
  </div>
);

export default MemberList;
