import { values } from 'lodash';

export const selectAllChannels = (state) => (
  values(state.channels)
);
