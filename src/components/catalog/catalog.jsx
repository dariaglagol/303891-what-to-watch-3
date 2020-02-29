import React from "react";
import PropTypes from "prop-types";
import MoviesList from "@components/movies-list/movies-list";
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

const Catalog = (props) => {
  const {films, onFilmClick} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden"> Catalog </h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {_renderGenres()}
      </ul>
      <MoviesList
        films={films}
        onFilmClick={onFilmClick}
      />
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Catalog;

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired
};
