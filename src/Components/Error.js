import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h2>The page you are looking for is not present</h2>
      <NavLink to={`/`} >Go Back To Home Page</NavLink>
    </div>
  )
}

export default Error
