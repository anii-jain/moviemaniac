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




    // // Add a Note
    // const addNote = async (title, description, tag) => {
      
    //   // API call
    //   // eslint-disable-next-line
    //   const response = await fetch (`${host}/api/notes/addnote`,{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'auth-token': localStorage.getItem('token')
    //     },
    //     body: JSON.stringify({title,description,tag})
    //   });
      
    //   // console.log("Added");
    //   const note = await response.json();
    //   setNotes(notes.concat(note));
    // }

    // // Delete a Note
    // const deleteNote = async (id)=> {

    //   const response = await fetch (`${host}/api/notes/deletenote/${id}`,{
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'auth-token': localStorage.getItem('token')
    //     }
    //   });
    // const json = response.json();
    // console.log(json);

    //   const newNotes = notes.filter((note)=> {
    //     return note._id!==id;
    //   })
    //   setNotes(newNotes);
    // }
    // // Edit a Note
    // const editNote = async (id, title, description, tag)=> {
      
    //   // API call
    //   const response = await fetch (`${host}/api/notes/updatenote/${id}`,{
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'auth-token': localStorage.getItem('token')
    //     },
    //     body: JSON.stringify({title, description, tag})
    //   });
    // // eslint-disable-next-line
    // const json = await response.json();
    //   let newNotes = JSON.parse(JSON.stringify(notes))
    //   // Logic to edit in client
    //   for (let i = 0; i<notes.length; i++){
    //     const element = newNotes[i];
    //     if (element._id === id){
    //       newNotes[i].title = title;
    //       newNotes[i].description = description;
    //       newNotes[i].tag = tag;
    //       break;
    //     } 
    //   }
    //   setNotes(newNotes);
    // }

    return (
        <MovieContext.Provider value={{movies, setMovies, getMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;