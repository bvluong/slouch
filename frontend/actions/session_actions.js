import * as SessionAPIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = ({ currentUser }) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => (
  SessionAPIUtil.login(user)
    .then(res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = (user) => (dispatch) => (
  SessionAPIUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => (dispatch) => (
  SessionAPIUtil.logout()
    .then(res => dispatch(receiveCurrentUser( {currentUser: null} )),
      err => dispatch(receiveErrors(err.responseJSON)))
);
