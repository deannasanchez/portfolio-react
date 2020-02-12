import React from "react";
import "./home.css";
import ICB from "./icecoldbeats.png";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <div className="container main-home">
      <div className="row">
        <div className="col mt-5 mb-5">
          <h1 className="title">Deanna Sanchez</h1>
          <h1>Deanna Sanchez is a California based Web Developer .</h1>
        </div>
      </div>

      <div className="row projecttop mb-5">
        <div className="col">
          <h2>
            A Little About Me
        </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
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
      <hr className="mt-5"></hr>
      <Footer />
    </div>
  );
}

export default Home;
