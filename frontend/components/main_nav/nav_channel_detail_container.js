import { connect } from 'react-redux';
import { fetchChannel, receiveNewChannel } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selector';
import NavChannelDetail from './nav_channel_detail';

const mapStateToProps = (state) => ({
  currentUser: (state.session.currentUser || {} ),
  notification: state.notification
});

const mapDispatchToProps = (dispatch) => ({
  receiveNewChannel: channel => dispatch(receiveNewChannel(channel)),
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(NavChannelDetail);
