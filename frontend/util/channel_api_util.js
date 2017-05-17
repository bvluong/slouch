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
