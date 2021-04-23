const action = {
  // action types
  GET_MOVIES_REQUEST: "GET_MOVIES_REQUEST",
  GET_MOVIES_SUCCESS: "GET_MOVIES_SUCCESS",
  GET_MOVIES_ERROR: "GET_MOVIES_ERROR",

  SHOW_MOVIE_REQUEST: "SHOW_MOVIE_REQUEST",
  SHOW_MOVIE_SUCCESS: "SHOW_MOVIE_SUCCESS",
  SHOW_MOVIE_ERROR: "SHOW_MOVIE_ERROR",

  // action
  getMovies: ({ search, type, page }) => ({
    type: action.GET_MOVIES_REQUEST,
    payload: { s: search, type, page },
  }),

  showMovie: ({ i, callback, ...restParam }) => ({
    type: action.SHOW_MOVIE_REQUEST,
    payload: { i, callback, ...restParam },
  }),
};

export default action;
