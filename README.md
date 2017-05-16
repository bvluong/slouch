# Slouch

[Slouch link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/RFTgmfpn/slouch

## Minimum Viable Product

Slouch is a messaging web application inspired by Slack built using Ruby on Rails
and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README
- [ ] Live Chat
- [ ] Channels
- [ ] Direct Message
- [ ] Teams or multi-person DM

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (0.5 day)

**Objective:** Functioning rails project with front-end Authentication. Create forms that allow users to create new accounts and login.


### Phase 3: Channels backend and frontend (2.5 day)

**Objective:** Channels will return a list of members and users can join channels. Create Main Navigation bar that displays the channels that user is subscribed to.

### Phase 4: Messages backend and frontend (4 days)

**Objective:** Channels can request all the messages related to the channel. Create main chat block that renders all messages for specific channel. Implement websockets to allow for real-time chat.

### Phase 5: Direct Messaging and allow users to create channel(2 day)

**Objective:** Split up the direct messages from the public channels. Allow users to create a private and public channel.

### Phase 6: - Styling

**Objective:** Add avatars, seed data, and clean up the html/css.

### Bonus Features (TBD)
- [ ] Add in Emojis
- [ ] Add moving splash page
