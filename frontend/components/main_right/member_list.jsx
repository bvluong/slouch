import React from 'react';

const MemberList = ({users}) => (
  <div className='member-list'>
    <h4>{users.length}</h4>
  </div>
);

export default MemberList;
