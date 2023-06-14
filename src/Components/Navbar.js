import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div className="navbar">
      <div className="headerLeft">
        <NavLink to="/">
          <img
            className="header_icon"
            src="https://previews.123rf.com/images/vectorinside/vectorinside1906/vectorinside190600106/125213418-movie-logo-with-abstract-letter-m-logo-for-movie-production.jpg"
            alt="Moviemaniac"
          />
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="navbar_home">Home</span>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <span className="navbar_home">About</span>
        </NavLink>
        </div>
        <div className="headerRight">
        {
          isAuthenticated && <NavLink className="myusericon" to={`user/${user.email}`}> <AccountCircleIcon ></AccountCircleIcon> </NavLink>
        }
        {
          isAuthenticated ? 
          <button className="mybutton" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> : <button className="mybutton" onClick={() => loginWithRedirect()}>Log In</button>
        }
        </div>
    </div>
  );
};

export default Navbar;
