import React from 'react'
import Movies from './Movies'
import Search from './Search'
import "./movieshow.css"

const Movieshow = () => {
  
  return (
    <div className='Movieshow'> 
      <Search />
      <Movies />
    </div>
  )
}

export default Movieshow
