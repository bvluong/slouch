import { connect } from 'react-redux';
import createMessage from '../../actions/message_actions';
import MainChat from './main_chat';

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(null, mapDispatchToProps)(MainChat);
