import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/slice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
