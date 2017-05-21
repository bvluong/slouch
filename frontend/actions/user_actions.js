import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_CURRENT_USERS = "RECEIVE_CURRENT_USERS";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = ({ currentUser }) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveCurrentUsers = ( users ) => ({
  type: RECEIVE_CURRENT_USERS,
  users
});

export const fetchUsers = () => (dispatch) => (
  UserAPIUtil.fetchUsers()
    .then(res => dispatch(receiveCurrentUsers(res)))
  );

export const fetchUser = (id) => (dispatch) => (
  UserAPIUtil.fetchUser(id)
    .then(res => dispatch(receiveCurrentUser(res)))
  );
