import React from 'react';
import NavChannelDetailContainer from './nav_channel_detail_container';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FindChannelContainer from '../channel_form/find_channel_container';

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


class NavChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

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
            <div className="modal-form-close">
              <button className="close-button"
                onClick={this.closeModal}>
                <i className="fa fa-times-circle fa-2x" aria-hidden="true" id="fa-icons"></i>

              </button>
            </div>
            <FindChannelContainer closeModal={this.closeModal.bind(this)}/>
          </Modal>

        </div>
        <div className="direct-message-header">
          <button className="modal-button" onClick={this.openModal}>
            <h2> Channels <span className="channel-length">({channels.length})</span></h2>
            <i className="fa fa-plus-circle"  id="fa-icons" aria-hidden="true"></i>
          </button>
        </div>
        <NavChannelDetailContainer/>
      </div>
    );
  }
}

export default NavChannel;
