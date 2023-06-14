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
      <section className="movie-sectiondetails">
        <div className="movie-carddetails">
          <div className="imgdetails">
            <figure>
              <img src={movie.Poster} alt="" />
            </figure>
          </div>
          <div className="card-contentdetails">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <div className="btndetails">
              <NavLink to="/" className="back-btndetails">
                <p>Go Back</p>
              </NavLink>
              {isAuthenticated && (
                // <NavLink to="/" className="addtofavo-btndetails">



// {/* <p></p> */}
                  <Favobutton />
                  




                // </NavLink> 
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moviedetails;
