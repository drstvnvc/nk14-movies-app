import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies() {},
  createMovie() {},
  getMovie() {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
    selectedMovie: null,
  },
  reducers: {
    setMovies(state, action) {
      state.page = action.payload;
    },
    setMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    ...middlewareActions,
  },
});

export default moviesSlice.reducer;

export const { getMovies, setMovies, createMovie, getMovie, setMovie } =
  moviesSlice.actions;
