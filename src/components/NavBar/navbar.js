import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
      <div className="container">
           <div className="row top-page">
               <div className="col-10">
               <a href="/">Deanna Sanchez</a>
                </div>
                <div className="col-1" id="top-right">
                <a href="/about">About</a>
                </div>
                <div className="col-1" id="top-right">   
                <a href="/contact">Contact</a>
                </div>
            </div>
        </div>


    // <Navbar>
    //   <Nav className="ml-auto text-white">
    //     <Nav.Link href="/">Deanna Sanchez</Nav.Link>
    //     <Nav.Link href="/Resume">Resume</Nav.Link>
    //     <Nav.Link href="/Projects">Projects</Nav.Link>
    //   </Nav>
    // </Navbar>
  )
}
export default NavBar;