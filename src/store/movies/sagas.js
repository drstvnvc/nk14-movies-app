import { takeLatest, call, put } from "redux-saga/effects";
import { getMovies, setMovies, createMovie, getMovie, setMovie } from "./slice";
import moviesService from "../../services/MoviesService";

function* handleGetMovies(action) {
  try {
    const movies = yield call(moviesService.getMovies, action.payload);
    yield put(setMovies(movies));
  } catch (error) {
    console.error(error);
  }
}

function* handleCreateMovie(action) {
  try {
    const movie = yield call(moviesService.createMovie, action.payload.movie);

    if (action.payload.onSuccess) {
      yield call(action.payload.onSuccess, movie);
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleGetMovie(action) {
  try {
    const movie = yield call(moviesService.getMovie, action.payload);
    yield put(setMovie(movie));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetMovies() {
  yield takeLatest(getMovies.type, handleGetMovies);
}

export function* watchCreateMovie() {
  yield takeLatest(createMovie.type, handleCreateMovie);
}

export function* watchGetMovie() {
  yield takeLatest(getMovie.type, handleGetMovie);
}
