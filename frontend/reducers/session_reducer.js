import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';

import { RECEIVE_CHANNEL } from '../actions/channel_actions';

import { merge, values } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      let newState = merge({}, state);
      let channels = values(newState.currentUser.channels);
      if (channels.every(channel => !(channel.id === action.channel.id)) ) {
      channels.push(action.channel); }
      return merge( {}, state, {currentUser: {channels}});
    case RECEIVE_CURRENT_USER:
      return merge( {}, _nullUser, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge( {}, _nullUser, { errors: action.errors } );
    case CLEAR_ERRORS:
      return merge({}, _nullUser);
    default:
      return state;
  }
};

export default sessionReducer;
