import { connect } from 'react-redux';
import {fetchChannel} from '../../actions/channel_actions';
import MainRight from './main_right';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainRight);
