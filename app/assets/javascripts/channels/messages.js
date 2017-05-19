App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    const  RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
    const receiveMessage = message => ({
      type: RECEIVE_MESSAGE,
      message
    });
    return window.store.dispatch(receiveMessage(data));
  },
});
