import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { createChannel } from '../../actions/channel_actions';
import { selectAllUsers } from '../../reducers/selector';
import ChannelForm from './channel_form';

const mapStateToProps = (state, ownProps) => ({
  users: selectAllUsers(state),
  currentUser: state.session.currentUser,
  user: ownProps.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  createChannel: (channel) => dispatch(createChannel(channel))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChannelForm);
