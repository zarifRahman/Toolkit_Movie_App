import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const baseUrl = "https://www.omdbapi.com/";

const Home = () => {
  const movieText = "Harry";

  // when i get the value from api i want to dispatch so
  // that it will go to the reducer and the reducer will update the state
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async (req, res) => {
      // s= is search term
      const response = await movieApi
        .get(`${baseUrl}?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.error(err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
