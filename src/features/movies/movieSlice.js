import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // actions
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

// actions which we can import in our home component
export const { addMovies } = movieSlice.actions;

// Q-- if i want to get a value from the store how can i do that? --- By this
// 1.movies is the name of the reducer 2.movies is the property
export const getMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
