import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Api";
import { BsPlayFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(requests.popular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    }
  }, [movies]);

  const truncatedOverview = movie?.overview?.slice(0, 150) + "...";

  if (!movie) {
    return null; // or render a loading state
  }

  const handlePlayButtonClick = () => {
    // Assuming you want to search on YouTube using the movie title
    const searchQuery = encodeURIComponent(movie.title);
    const youtubeSearchURL = `https://www.youtube.com/results?search_query=${searchQuery}`;
    window.open(youtubeSearchURL, "_blank");
  };

  return (
    <div className="w-full h-[500px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[500px] bg-gradient-to-r from-black"></div>
        <img
          className="object-cover w-full h-full "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-1/4 p-4 w-full md:p-8">
          <h1 className="mb-3 text-2xl font-bold sm:text-3xl">{movie.title}</h1>
          <div className="flex mb-3 space-x-4">
            <button
              className="flex items-center py-1 px-2 text-black border sm:px-4 bg-slate-200 border-slate-200"
              onClick={handlePlayButtonClick}
            >
              <BsPlayFill className="mr-1 w-6 h-8" />
              Play
            </button>
            <button className="flex items-center py-1 px-2 border sm:px-4 border-slate-200">
              <MdWatchLater className="mr-1 w-5 h-5" />
              Watch Later
            </button>
          </div>
          <p className="text-sm text-slate-300">
            Release Date: {movie.release_date}
          </p>
          <p className="w-2/3 text-sm text-slate-200 md:text-lg md:max-w-1/3 lg:w-1/2">
            {truncatedOverview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
