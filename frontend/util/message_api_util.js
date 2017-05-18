export const fetchMessages = (id) => (
  $.ajax({
    method: "GET",
    url: `api/channels/${id}/messages`
  })
);

export const fetchMessage = (id) => (
  $.ajax({
    method: "GET",
    url: `api/messages/${id}`
  })
);

export const createMessage = ( message ) => (
  $.ajax({
    method: "GET",
    url: 'api/messages/',
    data: { message }
  })
);
