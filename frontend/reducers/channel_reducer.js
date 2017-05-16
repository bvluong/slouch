import { RECEIVE_CHANNELS } from '../actions/channel_actions';
import { merge } from 'lodash';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};

export default channelReducer;
