import { values } from 'lodash';

export const selectAllChannels = (state) => (
  values(state.channels) || []
);

export const selectAllUsers = (state) => (
  values(state.users) || []
);

export const selectMessages = (state) => (
  values(state.messages) || []
);
