import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';

import { RECEIVE_CHANNEL } from '../actions/channel_actions';

import { merge, values } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      let newState = merge({}, state);
      let channels = values(newState.channels);
      channels.push(action.channel);
      return merge( {}, state, {currentUser: {channels}});
    case RECEIVE_CURRENT_USER:
      return merge( {}, _nullUser, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge( {}, _nullUser, { errors: action.errors } );
    default:
      return state;
  }
};

export default sessionReducer;
