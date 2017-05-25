import React from 'react';
import ChannelFormContainer from '../channel_form/channel_form_container';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { merge } from 'lodash';

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


class MemberList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false, user: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  openModal() {
    this.setState({modalIsOpen: true});

  }

  updateUserId(e) {
    e.preventDefault();
      const selected_user = this.props.users
        .filter(user => user.id === e.currentTarget.value)[0];
      const user = merge(selected_user, { username: selected_user.name});
      this.setState({ user }, ()=> this.openModal() );
  }


 closeModal() {
   this.setState({modalIsOpen: false});
  }

  render () {
    const {users} = this.props;
    return (
      <div className='member-list'>

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
                <i className="fa fa-times-circle fa-2x" aria-hidden="true" id="fa-icons"/>
              </button>
            </div>
            <ChannelFormContainer user={this.state.user}
              closeModal={this.closeModal.bind(this)}/>
          </Modal>

        </div>

        <h4><i className="fa fa-user-o" aria-hidden="true"/>
        {users.length} Members</h4>

        <ul className='member-details'>
          {users.map(user => <li key={user.id}
              value={user.id}
              onClick={this.updateUserId}>
            <img className={`member-icon ${
                ["red", "blue", "orange", "green", "yellow", "pink", "teal", "grey"]
                [user.id % 8]}`} src={user.avatar}/>
            <span>{user.name}</span>
          </li>)}
        </ul>
      </div>
  );}
}

export default MemberList;
