import action from "./action";

const initState = {
  movies: [],
  totalResults: 0,
  search: "Avengers",
  page: 1,
  lastPage: 1,
  movie: {},
  loading: false,
  error: null,
};

export default function movieReducer(state = initState, dispatch) {
  switch (dispatch.type) {
    case action.GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        search: dispatch.payload.s,
      };

    case action.GET_MOVIES_SUCCESS:
      const { page } = dispatch.payload;
      return {
        ...state,
        loading: false,
        movies:
          page > 1
            ? [...state.movies, ...dispatch.payload.movies]
            : [...dispatch.payload.movies],
        totalResults: dispatch.payload.totalResults,
        page,
        lastPage: dispatch.payload.lastPage,
      };

    case action.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: dispatch.payload.error,
      };

    case action.SHOW_MOVIE_REQUEST:
      const { Title } = dispatch.payload;
      return {
        ...state,
        loading: true,
        movie: { Title },
      };

    case action.SHOW_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: { ...dispatch.payload.movie },
      };

    case action.SHOW_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: dispatch.payload.error,
      };

    default:
      return state;
  }
}
