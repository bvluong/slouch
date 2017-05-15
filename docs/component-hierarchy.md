## Component Hierarchy

**AuthFormContainer**
  - Form

**HomeContainer**
 - AuthFormContainer
 - HomeNav
  + demo
  + login
  + sign up

**ChannelBrowseContainer**
  - ChannelBrowseIndex
    - ChannelBrowseDetail
      + channel name
      + channel description

**DirectMessageContainer**
  - DirectMessageIndex
    + search bar
    - DirectMessageDetail
      + username

**MainApp**
  - MainNavContainer
  - MainChatContainer
  - MainChannelContainer
  - MainHeaderContainer

**MainNavContainer**
  - NavHeader
    + logo
    + current user
  - NavMessages
    + DirectMessageButton
    + username
  - NavChannel
    + channel name

**MainChatContainer**
  - MessageIndex
    + avatar
    + username
    + time stamp
    + message body
  - MessageInput

**MainChannelContainer**
  - ChannelDetail
  - ChannelMembers
    + member names

**MainHeaderContainer**
  - Main Header Detail
    + channel name
    + user count
    + channel description



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/main" | "MainApp" |
