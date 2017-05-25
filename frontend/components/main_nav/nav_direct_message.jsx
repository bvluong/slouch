import React from 'react';

const NavDirectMessage = ({channel, privatechannels, updateChannel, state, currentUser}) => {
  const displayname = channel.name.replace(`${currentUser.username},`,"")
      .replace(`,${currentUser.username}`,"")
      .replace(currentUser.username,"");

  return (
    <li
      onClick={updateChannel}
      className={
        (state.channel_id===channel.id) ? state.classname : "channel-detail"
      }
      value={channel.id}>
      @ {displayname === "" ? currentUser.username : displayname}
      </li>
  );
};

export default NavDirectMessage;
