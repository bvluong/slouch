import React from 'react';
import MemberList from './member_list';
import MainRightHeader from './main_right_header';

class MainRight extends React.Component {

  render() {
    const {currentChannel} = this.props;
    return (
      <div className="main-right">
        <MainRightHeader currentChannel={currentChannel}/>
        <MemberList users={currentChannel.users}/>
      </div>
    );
  }
}

export default MainRight;
