import { configureStore } from "@reduxjs/toolkit";
// moviesReducer is just a name
import moviesReducer from "./movies/movieSlice";

export const store = configureStore({
  // create the reducer
  reducer: {
    // reducers name is movies
    movies: moviesReducer,
  },
});

// Q-- if i want to get a value from the store how can i do that?
