import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import channelReducer from './channel_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  channels: channelReducer
});

export default rootReducer;
