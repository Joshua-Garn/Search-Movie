import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchInfo() {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=da8288eb`
    );
    setLoading(false);
    setMovieInfo(response.data);
  }

  useEffect(() => {
    setLoading(true);
    fetchInfo();
  }, [id]);

  return (
    <>
      <section id="movieinfo">
        <div>
          {loading ? (
            <div class="loader-container">
              <div class="bouncing-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="back">
                <Link to="/movies">
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-left"
                    className="back__btn"
                  />
                </Link>
              </div>
              <div className="movieinfo__wrapper">
                <div className="movieinfo__poster--wrapper">
                  <img
                    className="movieinfo__poster"
                    src={movieInfo.Poster}
                    alt={movieInfo.Title}
                  />
                </div>
                <div className="movieinfo__description">
                  <h2 className="movieinfo__title">{movieInfo.Title}</h2>
                  <div className="movieinfo__rating">
                    <h3>
                      <b>Rating:</b> {movieInfo.imdbRating} / 10
                    </h3>
                    <h3>
                      <b>Type:</b> {movieInfo.Type}
                    </h3>
                    <h3>
                      <b>Genre:</b> {movieInfo.Genre}
                    </h3>
                    <h3>
                      <b>Runtime:</b> {movieInfo.Runtime}
                    </h3>
                    <h3>
                      <b>Year:</b> {movieInfo.Year}
                    </h3>
                    <h3>
                      <b>Plot:</b> {movieInfo.Plot}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default MovieInfo;
