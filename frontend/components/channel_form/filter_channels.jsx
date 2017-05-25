import React from 'react';

const FilterChannels = ({channel, idx, submitHandler}) => (
  <li >
    <button className="find-channel-button" type="button" onClick={submitHandler(channel)}>
     <span
       className={`channel-icon ${
     ["color1", "color2"]
     [ idx % 2]}`}># {channel.name}</span>
    </button>
  </li>
);

export default FilterChannels;
