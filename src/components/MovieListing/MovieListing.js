import React from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../../features/movies/movieSlice";

const MovieListing = () => {
  // useFetch is used to fetch all the movies from the state
  const movies = useSelector(getMovies);
  console.log(movies.Search);
  return <div>MovieListing MovieListing</div>;
};

export default MovieListing;
