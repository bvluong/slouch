import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

const defaultState = {
  name: "",
  description: "",
  private: false,
  users: []
};

const channelReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, action.channel );
    default:
      return state;
  }
};

export default channelReducer;
