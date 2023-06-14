import React, { useContext, useEffect } from "react";
import MovieContext from "./Moviecontext";
import "./userpage.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Userpage = () => {
  // const context = useContext(MovieContext);
  // console.log(context);
  // const { movies, getMovies } = context;
  const { user, isAuthenticated } = useAuth0();
  // useEffect(
  //   () => {
  //   getMovies();
  //   }, // eslint-disable-next-line
  //   []
  // );
  // console.log(user);
  return (
    <div className="outer">
      <div className="userpage">
        <div className="left">
          <img className="userimg" src={user.picture} alt={user.name} />
        </div>
        <div className="right">
          <h2 className="textuser">Name: {user.nickname}</h2>
          <h2 className="textuser">Email: {user.email}</h2>
        </div>
      </div>
      <div className="favorite">
        <u>
          <h1 className="textfavo"> Your Favorite's: </h1>
        </u>
        {/* <div className="container">
          {movies.length === 0 && "No movies to display"}
        </div> */}


        {/* {movies.map((movie) => {
          return ( */}
{/* <div className="moviedetails">
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
              {isAuthenticated && (
                <NavLink to="/" className="addtofavo-btndetails">
                  <p>Remove from Favourite</p>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </section>
    </div> */}
          {/* );
        })} */}


      </div>
    </div>
  );
};

export default Userpage;
