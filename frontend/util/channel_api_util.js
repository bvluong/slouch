export const fetchChannels = () => (
  $.ajax({
    method: "GET",
    url: "api/channels"
  })
);

export const fetchChannel = (id) => (
  $.ajax({
    method: "GET",
    url: `api/channels/${id}`
  })
);

export const createChannel = channel => (
  $.ajax({
    method: "POST",
    url: "api/channels",
    data: {channel}
  })
);


export const updateSubscription = channel_id => (
  $.ajax({
    method: "PATCH",
    url: `api/channels/${channel_id}`
  })
);
