import { connect } from 'react-redux';
import { createMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import MainChat from './main_chat';

const mapStateToProps = ({currentChannel}) => ({
  currentChannel
});


const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  fetchChannel: (id) => dispatch(fetchChannel(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MainChat);
