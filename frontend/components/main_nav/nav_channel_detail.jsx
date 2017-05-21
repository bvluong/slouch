import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ChannelFormContainer from '../channel_form/channel_form_container.js';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '80%',
    overflow              : 'none'
  }
};


class NavChannelDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classname: "channel-detail active", channel_id: 1,
    modalIsOpen: false };
    this.updateChannel = this.updateChannel.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateChannel(e) {
    e.preventDefault(e);
    this.props.fetchChannel(e.target.value);
    this.setState(
      { classname: "channel-detail active",
        channel_id: e.target.value });
  }


  render () {
    const { userChannels } = this.props;
    const public_channels = userChannels.filter( channel => !channel.private );
    const private_channels = userChannels.filter( channel => channel.private );

    const channel_names = public_channels.map(
      channel =>
      <li
        onClick={this.updateChannel}
        className={(this.state.channel_id===channel.id) ?
          this.state.classname : "channel-detail"}
        key={channel.id} value={channel.id}>
        # {channel.name}
      </li>
  );
  const direct_messages = private_channels.map(
    channel =>
    <li
      onClick={this.updateChannel}
      className={(this.state.channel_id===channel.id) ?
        this.state.classname : "channel-detail"}
      key={channel.id} value={channel.id}>
      @ {channel.name}
    </li>
);

    return (
      <div className="nav-all-channels">
        <ul className="all-channels">
          {channel_names}
        </ul>

        <div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <div className="modal-form-close">
              <button className="close-button"
                onClick={this.closeModal}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
            </div>
            <ChannelFormContainer closeModal={this.closeModal.bind(this)}/>
          </Modal>
        <div className="direct-message-header">
          <button className="modal-button" onClick={this.openModal}>
            <h2> direct messages </h2>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>

      </div>
        <ul className="direct-messages-channels">
          {direct_messages}
        </ul>
      </div>
    );
  }
}




export default NavChannelDetail;
