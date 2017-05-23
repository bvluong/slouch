import * as ReactionAPIUtil from '../util/reaction_api_util';

export const  RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createReaction = (reaction) => dispatch => (
  ReactionAPIUtil.createReaction(reaction)
  .then(message => dispatch(receiveMessage(message)))
);
