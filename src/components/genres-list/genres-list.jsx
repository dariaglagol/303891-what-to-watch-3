import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {activeGenre, onGenreTabClick, genreList} = props;

  function _renderGenres() {
    return [...genreList.values()].map((genre) => {
      return (
        <li
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
          key={genre}
          onClick={() => {
            onGenreTabClick(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
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
  genreList: PropTypes.exact(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default GenresList;
