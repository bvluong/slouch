import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_NEW_CHANNEL = "RECEIVE_NEW_CHANNEL";

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveNewChannel = channel => ({
  type: RECEIVE_NEW_CHANNEL,
  channel
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
  .then(channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = (id) => dispatch => (
  ChannelAPIUtil.fetchChannel(id)
  .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (channel) => dispatch => (
  ChannelAPIUtil.createChannel(channel)
  .then(chan => dispatch(receiveChannel(chan)))
);
