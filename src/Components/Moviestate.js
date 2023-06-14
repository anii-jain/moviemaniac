import { useState } from "react";
import MovieContext from "./Moviecontext";
import { useAuth0 } from "@auth0/auth0-react";

const MovieState = (props) => {
    const { user } = useAuth0();
  const host = "http://localhost:5000";
    const moviesInitial = [];
    const [movies, setMovies] = useState(moviesInitial);

    // Get all Movies
    const getMovies = async () => {
      
      // API call
      const response = await fetch (`${host}/api/favorite/fetchallnotes`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'email': user.email
        },
      });
      
      const json = await response.json();
      console.log(json);
      setMovies(json);
    }

    return (
        <MovieContext.Provider value={{movies, setMovies, getMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;