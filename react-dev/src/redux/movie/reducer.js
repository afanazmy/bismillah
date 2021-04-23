import action from "./action";

const initState = {
  movies: [],
  totalResults: 0,
  search: null,
  page: 1,
  lastPage: 1,
  movie: null,
  loading: false,
  error: null,
};

export default function movieReducer(state = initState, dispatch) {
  switch (dispatch.type) {
    case action.GET_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        search: dispatch.payload.s,
      };

    case action.GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: dispatch.payload.movies,
        totalResults: dispatch.payload.totalResults,
        page: dispatch.payload.page,
        lastPage: dispatch.payload.lastPage,
      };

    case action.GET_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: dispatch.payload.error,
      };

    default:
      return state;
  }
}
