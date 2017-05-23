export const createReaction = ( reaction ) => (
  $.ajax({
    method: "POST",
    url: 'api/reactions/',
    data: { reaction }
  })
);
