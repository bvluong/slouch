import { RECEIVE_CURRENT_USERS } from '../actions/user_actions';

import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USERS:
      return merge( {}, action.users);
    default:
      return state;
  }
};

export default usersReducer;
