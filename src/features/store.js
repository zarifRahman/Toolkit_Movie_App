import { configureStore } from "@reduxjs/toolkit";
// moviesReducer is just a name
import moviesReducer from "./movies/movieSlice";

export const store = configureStore({
  // create the reducer
  reducer: moviesReducer,
});

// Q-- if i want to get a value from the store how can i do that?
