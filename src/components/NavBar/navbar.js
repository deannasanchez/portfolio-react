import React from "react";
import "./style.css";

function NavBar() {
  return (
      <div className="container">
           <div className="row top-page">
               <div className="col-9">
               <a href="/">Deanna Sanchez</a>
                </div>
                <div className="col-1" id="top-right">
                <a href="/about">About</a>
                </div>
                <div className="col-1" id="top-right">
                <a href="/work">Work</a>
                </div>
                <div className="col-1" id="top-right">   
                <a href="/contact">Contact</a>
                </div>
            </div>
        </div>

  )
}
export default NavBar;