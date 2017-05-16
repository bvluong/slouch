import { RECEIVE_CHANNELS } from '../actions/channel_actions';
import { merge } from 'lodash';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};

export default channelReducer;
