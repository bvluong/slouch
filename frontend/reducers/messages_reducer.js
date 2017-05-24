import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, action.messages);
    case RECEIVE_MESSAGE:
      let newState = merge({},state);
      delete newState[action.message.id];
      return merge({}, newState, {[action.message.id]: action.message});
    default:
      return state;
  }
};

export default messagesReducer;
