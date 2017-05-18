import * as MessageAPIUtil from '../util/message_api_util';

export const  RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const  RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createMessage = (message) => dispatch => (
  MessageAPIUtil.createMessage( message )
  .then(channels => dispatch(createMessage(message)))
);

export const fetchMessages = (id) => dispatch => (
  MessageAPIUtil.fetchMessages(id)
  .then(channels => dispatch(fetchMessages(channels)))
);
