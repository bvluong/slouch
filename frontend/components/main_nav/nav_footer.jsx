import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Features from './features';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '60%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    height                : '90%',
    width                 : '60%',
    overflow              : 'none'
  }
};

class NavChannel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  render() {
    return (
      <div className="nav-bottom" >
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

            <Features closeModal={this.closeModal.bind(this)}/>

          </Modal>

          <button className="modal-button" onClick={this.toggleModal}>
            Features
          </button>

        <div className="nav-footer">
          <a href="https://github.com/bvluong" target="_blank">
            <i className="fa fa-github" id="fa-contact" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/bryant-luong/" target="_blank">
            <i className="fa fa-linkedin" id="fa-contact" aria-hidden="true"></i>
          </a>
          <a href="mailto:bryantvinluong@gmail.com?Subject=Hello" target="_blank">
            <i className="fa fa-envelope-o" id="fa-contact" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default NavChannel;
