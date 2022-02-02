import React from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  // useFetch is used to fetch all the movies from the state
  const movies = useSelector(getMovies);
  console.log(movies.Search);
  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {/* <div className="movie-container">{renderShows}</div> */}
      </div>
    </div>
  );
};

export default MovieListing;
