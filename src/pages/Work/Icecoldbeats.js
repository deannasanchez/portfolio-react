import React from "react";
import ICB from "../Home/icecoldbeats.png";

function Home() {
  return (
    <div className="container main-home">
      <div className="row">
        <div className="col-10"><h1>
          Deanna Sanchez is a Full-Stack Web Developer with a background in HTML, CSS, Javascript, JQuery, React.js, APIs,
           Node.js, Express, JSON, MySQL and MongoDB.
      </h1></div>
      </div>

      <div className="row projecttop">
      <div className="col-3">
        </div>
        <div className="col-2 icbtitle">
          <h4>
          <a href="https://gentle-atoll-31544.herokuapp.com/">Ice Cold Beats</a>
          </h4> 
        </div>
        <div className="col-7 icbcontainer">
          <a href="https://gentle-atoll-31544.herokuapp.com/"><img src={ICB} alt="ice cold beats" class="icbimg" /></a>
          <div class="icbmiddle">
          </div>
        </div>
      </div>

      <div className="row projecttop">
      <div className="col-3">
        </div>
        <div className="col-2 icbtitle">
          <h4>
          <a href="https://gentle-atoll-31544.herokuapp.com/">Ice Cold Beats</a>
          </h4>
        </div>
        <div className="col-6 icbcontainer">
          <a href="https://gentle-atoll-31544.herokuapp.com/"><img src={ICB} alt="ice cold beats" class="icbimg" /></a>
          <div class="icbmiddle">
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
