import React from 'react';

const MainRightHeader = ({currentChannel}) => (
  <div className="main-right-header">
    <h3>{ currentChannel.private ? 'Direct Message' : `About #${currentChannel.name}`}</h3>
    <div className="right-channel-detail">
      <h4><img src="http://res.cloudinary.com/djrgebhxz/image/upload/v1495593054/i-icon_okvism.png"/> Channel Details</h4>
      <div>
        <h5>Purpose</h5>
        <h6>{currentChannel.description}</h6>
        <h7> Created on {new Date(currentChannel.time_stamp)
        .toLocaleDateString("en-us", { month: "long" }) + " "}
        {new Date(currentChannel.time_stamp).getDay()},
        {new Date(currentChannel.time_stamp).getFullYear()}</h7>
      </div>
    </div>
  </div>
);

export default MainRightHeader;
