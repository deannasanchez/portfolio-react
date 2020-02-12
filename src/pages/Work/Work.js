import React from "react";
import "./work.css";
import ICB from "../Home/icecoldbeats.png";
import Footer from "../../components/Footer/footer";

function Work() {
  return (
      <div className="container">
        <div className="row">
        <div className="col icbcontainer">
          <a href="https://gentle-atoll-31544.herokuapp.com/"><img src={ICB} alt="ice cold beats" class="icbimg" /></a>
          <h4>
            <a href="https://gentle-atoll-31544.herokuapp.com/">Ice Cold Beats</a>
          </h4>
          </div>

          <div className="col icbcontainer">
          <a href="https://gentle-atoll-31544.herokuapp.com/"><img src={ICB} alt="ice cold beats" class="icbimg" /></a>
          <h4>
            <a href="https://gentle-atoll-31544.herokuapp.com/">Ice Cold Beats</a>
          </h4>
          </div>
          </div>
          <Footer />
          </div>
  );
}

export default Work;