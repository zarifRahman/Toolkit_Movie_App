import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchAsyncMovieOrShows,
  getMoviesOrshows,
  removeSeletedMovie,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  // dispatch to to update the state with id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShows(imdbID));
    // clean up function
    return () => {
      dispatch(removeSeletedMovie()); //
    };
  }, [dispatch, imdbID]);

  const data = useSelector(getMoviesOrshows);
  console.log(Object.keys(data));

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div>Loading....</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;
