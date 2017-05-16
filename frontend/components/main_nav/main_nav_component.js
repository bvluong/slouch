import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  channels: selectAllChannels(state.channels)
})

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
});
