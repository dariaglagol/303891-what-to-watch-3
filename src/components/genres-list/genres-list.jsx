import React from "react";
import {GENRES, DEFAULT_ACTIVE_GENRE} from "@utils/constants";

function _renderGenres() {
  return GENRES.map((genre) => {
    return (
      <li
        className={`catalog__genres-item ${DEFAULT_ACTIVE_GENRE === genre ? `catalog__genres-item--active` : ``}`}
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
      {_renderGenres()}
    </ul>
  );
};

export default GenresList;
