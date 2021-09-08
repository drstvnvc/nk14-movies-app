import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
  },
  reducers: {
    setMovies(state, action) {
      state.page = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const { setMovies } = moviesSlice.actions;
