import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { createChannel } from '../../actions/channel_actions';
import { selectAllUsers } from '../../reducers/selector';
import ChannelForm from './channel_form';

const mapStateToProps = (state) => ({
  users: selectAllUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createChannel: (channel) => dispatch(createChannel(channel))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChannelForm);
