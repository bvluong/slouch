export const fetchChannels = () => (
  $.ajax({
    method: "GET",
    url: "spi/channels"
  })
);
