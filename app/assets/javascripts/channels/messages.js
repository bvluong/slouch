App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    return store.dispatch({type: "RECEIVE_MESSAGE", message: data})
  },
});
