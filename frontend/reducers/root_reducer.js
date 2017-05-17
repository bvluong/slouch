import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import channelsReducer from './channels_reducer';
import channelReducer from './channel_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  channels: channelsReducer,
  currentChannel: channelReducer
});

export default rootReducer;
