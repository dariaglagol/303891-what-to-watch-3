import React from "react";
import PropTypes from "prop-types";
import MoviesList from "@components/movies-list/movies-list";
import GenresList from "@components/genres-list/genres-list";

const Catalog = (props) => {
  const {films, onFilmClick, activeGenre, onGenreTabClick} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden"> Catalog </h2>
      <GenresList
        onGenreTabClick={onGenreTabClick}
        activeGenre={activeGenre}
      />
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
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};
