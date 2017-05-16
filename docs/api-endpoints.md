# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/`
- `GET /api/users/:id`
  -returns list of channels subscribed
  -returns list of private channels(i.e direct messages)  
- `POST /api/users`


### Session

- `POST /api/session`
- `DELETE /api/session`

### Channels

- `GET /api/channels`
- `GET /api/channels/:id`
  -return list of members
- `POST /api/channels`
- `DELETE /api/channels/:id`

### Messages

- `GET /api/channel/:id/messages`
  -return list of messages
- `GET /api/messages/:id`
  -returns user's avatar and username
- `POST /api/messages`
- `PATCH /api/messages/:id`
- `DELETE /api/messages/:id`
