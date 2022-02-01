import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // actions
    addMovies: (state, payload) => {
      state.movies = payload;
    },
  },
});

// actions which we can import in our home component
export const { addMovies } = movieSlice.actions;

// Q-- if i want to get a value from the store how can i do that? --- By this
export const getMovies = (state) => state.movies;
export default movieSlice.reducer;