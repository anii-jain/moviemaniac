import React, { useContext, useState } from 'react'
import { AppContext} from './context'
import "./search.css";

const Search = () => {
  const {query, setQuery, isError} = useContext(AppContext);
  const [empty, setEmpty] = useState(false);
  return (
    <div className='search'>
       <section className="search-section">
        <h2 className='searchh2'>Search Your Favourite Movie</h2>
        <form className='formsearch' action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              className='searchinput'
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => 
                {if (e.target.value === "") setEmpty(true);
                else setEmpty(false);
                setQuery(e.target.value)}}
            />
          </div>
        </form>
        <div className="card-error">
          {empty && <p>Enter the name of the movie you want to search</p>}
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </div>
  )
}

export default Search
