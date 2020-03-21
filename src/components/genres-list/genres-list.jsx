import React from "react";
import PropTypes from "prop-types";
import {Genres} from "@utils/constants";

const GenresList = (props) => {
  const {activeGenre, onGenreTabClick} = props;

  function _renderGenres() {
    return [...Genres.values()].map((genre) => {
      const genreTabName = genre.multiply;
      const activeGenreMultipleName = activeGenre.multiply;
      return (
        <li
          className={`catalog__genres-item ${activeGenreMultipleName === genreTabName ? `catalog__genres-item--active` : ``}`}
          key={genreTabName}
          onClick={() => {
            onGenreTabClick(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genreTabName}</a>
        </li>
      );
    });
  }

  return (
    <ul className="catalog__genres-list">
      {_renderGenres()}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.exact({
    multiply: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
  }).isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default GenresList;
