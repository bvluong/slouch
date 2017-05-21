import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { createChannel, fetchChannel } from '../../actions/channel_actions';
import { selectAllUsers } from '../../reducers/selector';
import ChannelForm from './channel_form';

const mapStateToProps = (state) => ({
  users: selectAllUsers(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createChannel: (channel) => dispatch(createChannel(channel)),
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChannelForm);
