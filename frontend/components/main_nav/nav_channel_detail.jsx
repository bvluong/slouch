import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ChannelFormContainer from '../channel_form/channel_form_container.js';
import NavDirectMessage from './nav_direct_message';
import NavChannelName from './nav_channel_name';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '80%',
    width                 : '50%',
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
    e.preventDefault();
    this.props.fetchChannel(e.target.value);
    this.setState(
      { classname: "channel-detail active",
        channel_id: e.target.value });
  }


  render () {
    const userChannels = (this.props.currentUser.channels || []);
    const public_channels = userChannels.filter( channel => !channel.private );
    const private_channels = userChannels.filter( channel => channel.private );

    return (
      <div className="nav-all-channels">
        <ul className="all-channels">
          {public_channels.map(channel => <NavChannelName
            key={channel.id}
            channel={channel}
            updateChannel={this.updateChannel}
            state={this.state}
          />)}
        </ul>

        <div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            <div className="modal-form-close">
              <button className="close-button" onClick={this.closeModal}>
                <i className="fa fa-times-circle fa-2x"
                  aria-hidden="true"
                  id="fa-icons"/>
              </button>
            </div>

            <ChannelFormContainer closeModal={this.closeModal.bind(this)}/>

          </Modal>
        <div className="direct-message-header">
          <button className="modal-button" onClick={this.openModal}>
            <h2> direct messages </h2>
            <i className="fa fa-plus-circle fa-lg" id="fa-icons" aria-hidden="true"/>
          </button>
        </div>

      </div>
        <ul className="direct-messages-channels">
          {private_channels.map(channel =>
            <NavDirectMessage
              key={channel.id}
              channel={channel}
              updateChannel={this.updateChannel}
              state={this.state}
              currentUser={this.props.currentUser}/>)
        }
        </ul>
      </div>
    );
  }
}




export default NavChannelDetail;
