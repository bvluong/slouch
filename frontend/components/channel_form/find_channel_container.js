import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { subscribeChannel } from '../../actions/subscribe_actions';
import { fetchChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selector';
import FindChannel from './find_channel';

const mapStateToProps = (state) => ({
  channels: selectAllChannels(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  subscribeChannel: (channel_id) => dispatch(subscribeChannel(channel_id))
});

export default connect(mapStateToProps,mapDispatchToProps)(FindChannel);
