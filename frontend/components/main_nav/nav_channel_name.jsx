import React from 'react';

const NavChannelName = ({updateChannel, state, channel}) => (
  <li
    onClick={updateChannel}
    className={
      (state.channel_id===channel.id) ? state.classname : "channel-detail"
    }
    value={channel.id}>
    # {channel.name}
  </li>
);

export default NavChannelName;
