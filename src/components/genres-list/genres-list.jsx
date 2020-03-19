import React from "react";
import PropTypes from "prop-types";
import {Genres} from "@utils/constants";

const GenresList = (props) => {
  const {activeGenre, onGenreTabClick} = props;

  function _renderGenres() {
    return [...Genres.values()].map((genre) => {
      const genreTabName = genre.multiply;
      const genreSingleName = genre.single;
      return (
        <li
          className={`catalog__genres-item ${activeGenre === genreTabName ? `catalog__genres-item--active` : ``}`}
          key={genreTabName}
          onClick={() => {
            onGenreTabClick(genreSingleName);
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
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default GenresList;
