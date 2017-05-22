import * as ChannelAPIUtil from '../util/channel_api_util';
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const subscribeChannel = (channel_id) => dispatch => (
  ChannelAPIUtil.updateSubscription(channel_id)
  .then(channel => dispatch(receiveChannel(channel)))
);
