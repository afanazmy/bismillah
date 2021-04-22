const action = {
  // action types
  GET_MOVIE_REQUEST: "GET_MOVIE_REQUEST",
  GET_MOVIE_SUCCESS: "GET_MOVIE_SUCCESS",
  GET_MOVIE_ERROR: "GET_MOVIE_ERROR",

  // action
  getMovie: ({ search, type, page }) => ({
    type: action.GET_MOVIE_REQUEST,
    payload: { s: search, type, page },
  }),

  showMovie: ({ id }) => ({
    type: action.GET_MOVIE_REQUEST,
    payload: { i: id },
  }),
};

export default action;
