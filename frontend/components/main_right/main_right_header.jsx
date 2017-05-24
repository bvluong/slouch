import React from 'react';

const MainRightHeader = ({currentChannel}) => (
  <div className="main-right-header">
    <h3>{currentChannel.name}</h3>
    <h4>Channel Details</h4>
    <h5>{currentChannel.description}</h5>
  </div>
);

export default MainRightHeader;
