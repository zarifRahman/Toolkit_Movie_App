import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const baseUrl = "https://www.omdbapi.com/";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `${baseUrl}?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const movieText = "Friends";
    const response = await movieApi.get(
      `${baseUrl}?apiKey=${APIKey}&s=${movieText}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrShows = createAsyncThunk(
  "movies/fetchAsyncMovieOrShows",
  async (id) => {
    // const movieText = "Friends";
    const response = await movieApi.get(
      `${baseUrl}?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  moviesOrshows: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // actions
    removeSeletedMovie: (state) => {
      state.moviesOrshows = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      // if fulfilled we assign the response payload to our initial state
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      // if fulfilled we assign the response payload to our initial state
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncMovieOrShows.fulfilled]: (state, { payload }) => {
      console.log("MovieOrShows Fetched Successfully!");
      // if fulfilled we assign the response payload to our initial state
      return { ...state, moviesOrshows: payload };
    },
  },
});

// actions which we can import in our home component
export const { removeSeletedMovie } = movieSlice.actions;

// Q-- if i want to get a value from the store how can i do that? --- By this
// 1.movies is the name of the reducer 2.movies is the property
export const getMovies = (state) => state.movies.movies;

// 1. .movies is the reducer name and movies.shows is the state
export const getShows = (state) => state.movies.shows;
export const getMoviesOrshows = (state) => state.movies.moviesOrshows;

export default movieSlice.reducer;
