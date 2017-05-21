import React from 'react';
import NavChannelDetailContainer from './nav_channel_detail_container';
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
    transform             : 'translate(-50%, -50%)'
  }
};

class NavChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  openModal() {
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
   this.subtitle.style.color = '#f00';
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }

  componentDidMount() {
    this.props.fetchChannels();
  }



  render() {
    const { channels, userChannels } = this.props;
    return (
      <div className="nav-channels">

        <div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >

            <button onClick={this.closeModal}>close</button>
            Place holder for new Channel form
          </Modal>

        </div>
        <div className="direct-message-header">
          <button className="modal-button" onClick={this.openModal}>
            <h2> Channels <span className="channel-length">({channels.length})</span></h2>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        <NavChannelDetailContainer/>
      </div>
    );
  }
}

export default NavChannel;
