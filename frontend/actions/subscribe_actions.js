import * as ChannelAPIUtil from '../util/channel_api_util';
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const subscribeChannel = (channel) => dispatch => (
  ChannelAPIUtil.createChannel(channel)
  .then(chan => dispatch(receiveChannel(chan)))
);
