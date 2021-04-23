import { all, takeEvery, put, call } from "redux-saga/effects";
import { API } from "../../lib/helper";
import action from "./action";

function* getMovies({ payload: { callback, ...params } }) {
  const { onSuccess, onError } = callback || {};
  try {
    const response = yield call(API, { params });
    if (response?.Response === "True") {
      const { Search, totalResults } = response;
      yield put({
        type: action.GET_MOVIES_SUCCESS,
        payload: {
          movies: Search,
          totalResults: parseInt(totalResults),
          page: params.page,
          lastPage: Math.ceil(parseInt(totalResults) / 10),
        },
      });

      if (typeof onSuccess === "function") onSuccess({ params, response });
    } else if (response?.Response === "False") {
      yield put({
        type: action.GET_MOVIES_ERROR,
        payload: { error: response.Error },
      });

      if (typeof onError === "function") onError({ params, response });
    }
  } catch (error) {
    yield put({
      type: action.GET_MOVIES_ERROR,
      payload: { error: error },
    });

    if (typeof onError === "function") onError({ params, error });
  }
}

function* showMovie({ payload: { callback, i } }) {
  const { onSuccess, onError } = callback || {};
  try {
    const response = yield call(API, { params: { i } });
    if (response?.Response === "True") {
      yield put({
        type: action.SHOW_MOVIE_SUCCESS,
        payload: { movie: response },
      });

      if (typeof onSuccess === "function") onSuccess({ i, response });
    } else if (response?.Response === "False") {
      yield put({
        type: action.SHOW_MOVIE_ERROR,
        payload: { error: response.Error },
      });

      if (typeof onError === "function") onError({ i, response });
    }
  } catch (error) {
    yield put({
      type: action.SHOW_MOVIE_ERROR,
      payload: { error: error },
    });

    if (typeof onError === "function") onError({ i, error });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(action.GET_MOVIES_REQUEST, getMovies),
    takeEvery(action.SHOW_MOVIE_REQUEST, showMovie),
  ]);
}
