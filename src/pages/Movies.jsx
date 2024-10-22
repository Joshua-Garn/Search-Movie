import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchMovies(event) {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=da8288eb&s=${searchTerm}`
      );
      setLoading(false);
      if (response.data.Response === "True" && response.data.Search) {
        setSearchMovies(response.data.Search);
        setErrorMessage("");
      } else {
        setSearchMovies([]);
        setErrorMessage(":( No movies found");
      }
    } catch (error) {
      console.error("Error finding movies: ", error);
      setSearchMovies([]);
      setErrorMessage("failed to find movies, please try again later");
    }
  }

  function sortMovies(filter) {
    const sortedMovies = [...searchMovies];

    if (filter === "Latest-Movies") {
      sortedMovies.sort(
        (a, b) =>
          parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4))
      );
    } else if (filter === "Oldest-Movies") {
      sortedMovies.sort(
        (a, b) =>
          parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4))
      );
    }

    setSearchMovies(sortedMovies);
  }

  return (
    <>
      <Nav />
      <section id="movie__page">
        <div className="movie__page--wrapper">
          <div className="movie__page">
            <h1 className="movie__page--title">Search Movie</h1>
            <form action="" className="movies__form" onSubmit={fetchMovies}>
              <input
                type="text"
                className="movies__input"
                placeholder="Browse..."
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button type="submit" className="movies__btn--wrapper">
                <FontAwesomeIcon icon={faSearch} className="movies__btn" />
              </button>
            </form>
            <select
              className="movies__option"
              onChange={(event) => sortMovies(event.target.value)}
            >
              <option value="" disabled selected>
                Sort
              </option>
              <option value="Latest-Movies">Latest Movies</option>
              <option value="Oldest-Movies">Oldest Movies</option>
            </select>
            {errorMessage && <h2 className="">{errorMessage}</h2>}
            {loading ? (
              <div class="loader-container">
                <div class="bouncing-dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            ) : (
              <div className="movies__list">
                {searchMovies.map((movie) => (
                  <div className="movies__card--wrapper">
                    <div className="movies__card">
                      <Link to={`/movies/${movie.imdbID}`}>
                        <img
                          className="movies__poster"
                          src={movie.Poster}
                          alt=""
                        />
                        <h3 className="movies__title">
                          <b>{movie.Title}</b>
                        </h3>
                        <p className="movies__year">{movie.Year}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
