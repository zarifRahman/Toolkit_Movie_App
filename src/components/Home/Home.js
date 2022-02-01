import React, { useEffect } from "react";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import MovieListing from "../MovieListing/MovieListing";

const baseUrl = "https://www.omdbapi.com/";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async (req, res) => {
      // s= is search term
      const response = await movieApi
        .get(`${baseUrl}?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.error(err);
        });
      console.log(response);
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
