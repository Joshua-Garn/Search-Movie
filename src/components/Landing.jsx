import React from "react";
import { Link } from "react-router-dom";
import movie_night from "../assets/Movie_Night.svg"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__row">
            <h2>Find Your Next Movie With</h2>
            <h1>Search Movie</h1>
            <div className="search">
              <Link to="/movies">
                <button className="button">SEARCH</button>
              </Link>
            </div>
            <img className="header__img" src={movie_night} />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;