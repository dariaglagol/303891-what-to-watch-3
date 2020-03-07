import React from "react";
import {GENRES} from "@utils/constants";

function _renderGenres() {
  return GENRES.map((genre) => {
    return (
      <li
        className="catalog__genres-item"
        key={genre}
      >
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  });
}

const GenresList = () => {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {_renderGenres()}
    </ul>
  );
};

export default GenresList;
