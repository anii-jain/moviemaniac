import React, { useState } from "react";
import $ from "jquery";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./favobutton.css";


const Favobutton = () => {

const [favolike, setFavolike] = useState(false);
  function myFunction() {
    var element = document.getElementById("click");
    var myElement = document.getElementById("span");
    var classTest = myElement.classList.contains("fa-heart");
    console.log(classTest);
    if (!classTest) {
        element.classList.remove("active");
      setTimeout(function () {
        element.classList.remove("active-2");
      }, 30);
      element.classList.remove("active-3");
      setTimeout(function () {
        
        myElement.classList.add("fa-heart");
        myElement.classList.add("fa-hear-o");
      }, 15);
    }
    else {
        element.classList.add("active");
        element.classList.add("active-2");
      setTimeout(function () {
        myElement.classList.remove("fa-heart");
      }, 150);
      setTimeout(function () {
        element.classList.add("active-3");
      }, 150);
      document.getElementById("info").classList.add("info-tog");
      setTimeout(function () {
        document.getElementById("info").classList.remove("info-tog");
      }, 1000);
    }
    }

  return (
    <div className="click" id="click" onClick={myFunction}>
      <span className="fa-heart fa-hear-o" id="span">
        <FavoriteBorderIcon/>
        </span>
      <div className="ring"></div>
      <div className="ring2"></div>
      <p className="info" id="info">Added to favourites!</p>
    </div>
  );
};

export default Favobutton;
