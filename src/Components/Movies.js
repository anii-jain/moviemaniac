import React, { useContext } from "react";
import { AppContext } from "./context";
import { NavLink } from "react-router-dom";
import "./movies.css";

const Movies = () => {
  const { movie, isLoading } = useContext(AppContext);
  // console.log (movie);
  if (isLoading) {
    // console.log("i am here")
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <div className="movie">
      <div className="containermovies grid grid-4-col">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          return (
            <NavLink className="amovies" to={`movie/${imdbID}`} key={imdbID}>
              <div className="cardmovies">
                <div className="cardInfo">
                  <h2 className="h2movies">{Title.length >= 13 ? `${Title.substring(0,15)}...` : Title}</h2>
                  <img className="imgmovies" src={Poster} alt={imdbID} />
                  <section className="extra">
                  <p className="extrap">Want to know about this movie...</p>
                  <button className="extrab">Know More</button>
                  </section>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
