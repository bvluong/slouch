import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';
import MainHeader from './main_header';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannel: id => dispatch(fetchChannel(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(MainHeader);
