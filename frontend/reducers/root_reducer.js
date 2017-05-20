import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import channelsReducer from './channels_reducer';
import channelReducer from './channel_reducer';
import messagesReducer from './messages_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  channels: channelsReducer,
  currentChannel: channelReducer,
  messages: messagesReducer,
  users: usersReducer
});

export default rootReducer;
