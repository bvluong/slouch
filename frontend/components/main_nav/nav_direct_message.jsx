import React from 'react';

const NavDirectMessage = ({channel, privatechannels, updateChannel, state, currentUser}) => (
  <li
    onClick={updateChannel}
    className={
      (state.channel_id===channel.id) ? state.classname : "channel-detail"
    }
    value={channel.id}>
    @ {channel.name.replace(`${currentUser.username},`,"")
      .replace(`,${currentUser.username}`,"")
      .replace(currentUser.username,"")}
  </li>
);

export default NavDirectMessage;
