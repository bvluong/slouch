export const createReaction = ( reaction ) => (
  $.ajax({
    method: "POST",
    url: 'api/reactions/',
    data: { reaction }
  })
);

export const removeReaction = ( id ) => (
  $.ajax({
    method: "DELETE",
    url: `api/reactions/${id}`
  })
);
