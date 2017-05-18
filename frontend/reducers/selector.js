import { values } from 'lodash';

export const selectAllChannels = (state) => (
  values(state.channels) || []
);

export const selectMessages = (state) => (
  values(state.messages) || []
);
