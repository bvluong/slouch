import { connect } from 'react-redux';
import { selectMessages } from '../../reducers/selector';
import { fetchMessages } from '../../actions/message_actions';
import MessageIndex from './message_index';

const mapStateToProps = (state, { currentChannel }) => ({
  messages: selectMessages(state),
  currentChannel
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (id) => dispatch(fetchMessages(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(MessageIndex);
