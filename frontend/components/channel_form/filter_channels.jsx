import React from 'react';

const FilterChannels = ({channel, idx, submitHandler}) => (
  <li >
    <button className="find-channel-button" type="button" onClick={submitHandler(channel)}>
     <ul className={`channel-icon ${ ["color1", "color2"][ idx % 2]}`}>
       <li># {channel.name}</li>
       <li className="find-channel-descript">{channel.description}</li>
     </ul>
    </button>
  </li>
);

export default FilterChannels;
