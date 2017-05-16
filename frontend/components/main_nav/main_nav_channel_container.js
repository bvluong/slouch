import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selector';
import NavChannel from './nav_channel';

const mapStateToProps = (state) => ({
  channels: selectAllChannels(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps,mapDispatchToProps)(NavChannel);
