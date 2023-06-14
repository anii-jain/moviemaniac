import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { API_URL } from "./context";
import { useAuth0 } from "@auth0/auth0-react";
import "./moviedetails.css";
import Favobutton from "./Favobutton";

const Moviedetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { isAuthenticated } = useAuth0();
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } else {
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 10);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <div className="moviedetails">
      <div className="outerh">
        <img
          src="https://rare-gallery.com/uploads/posts/308272-Iron-Man-Infinity-Stones-Avengers-Endgame-4K.jpg"
          alt="movie"
          className="outerimg"
        />
        <div className="detailsmovie">
          <img src={movie.Poster} alt="movie" className="poster" />
          <div className="d">
            <h1 className="texth title">{movie.Title}</h1>
            <div className="middet">
              <p className="texth midplus"> {movie.imdbRating} / 10</p>
              <p className="texth mid">
                {movie.Released} || {movie.Genre}
              </p>
            </div>
            <p className="texth low">
              {" "}
              {movie.Plot.length >= 170
                ? `${movie.Plot.substring(0, 170)}`
                : movie.Plot}
            </p>
            {/* <p className="texth low eend">{movie.Awards}  .  {movie.Country}</p> */}
            <div className="btndetails">
              <NavLink to="/" className="back-btndetails">
                <p>Go Back</p>
              </NavLink>
              {isAuthenticated && <Favobutton />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
