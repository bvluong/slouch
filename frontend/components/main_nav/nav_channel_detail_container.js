import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selector';
import NavChannelDetail from './nav_channel_detail';

const mapStateToProps = (state) => ({
  currentUser: (state.session.currentUser || {} )
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(NavChannelDetail);
