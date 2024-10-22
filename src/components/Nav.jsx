import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <a href="/">
          <FontAwesomeIcon icon="fa-solid fa-film" className="logo__icon" />
          </a>
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/" className="nav__link">Home</Link>
            </li>
            <li className="nav__link">
              <Link to="/movies" className="nav__link">Movies</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;