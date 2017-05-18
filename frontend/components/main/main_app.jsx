import React from 'react';
import MainNav from '../main_nav/main_nav';
import MainHeaderContainer from '../main_header/main_header_container';
import MainChatContainer from '../main_chat/main_chat_container';

class MainApp extends React.Component {
  render() {
    return (
    <div className="main-app">
      <MainNav/>
      <div className="main-middle">
        <MainHeaderContainer/>
        <MainChatContainer/>
      </div>
    </div>
  );}
}

export default MainApp;
