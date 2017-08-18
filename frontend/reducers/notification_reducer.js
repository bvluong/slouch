import { RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';

const notificationReducer = (state = { new_channel: false }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};

export default notificationReducer;
