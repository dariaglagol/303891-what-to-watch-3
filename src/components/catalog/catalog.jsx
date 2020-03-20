import React from "react";
import PropTypes from "prop-types";
import MoviesList from "@components/movies-list/movies-list";
import GenresList from "@components/genres-list/genres-list";
import ShowMoreButton from "@components/show-more-button/show-more-button";
import {sliceMovieArray} from "@utils/utils";

const Catalog = (props) => {
  const {films, onFilmClick, activeGenre, onGenreTabClick, onShowMoreButtonClick, currentShownFilms} = props;

  const filmsToShow = sliceMovieArray(films, currentShownFilms);
  const isButtonHide = films.length <= currentShownFilms;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden"> Catalog </h2>
      <GenresList
        onGenreTabClick={onGenreTabClick}
        activeGenre={activeGenre}
      />
      <MoviesList
        films={filmsToShow}
        onFilmClick={onFilmClick}
      />
      {
        isButtonHide ? null :
          (<ShowMoreButton
            onShowMoreButtonClick={onShowMoreButtonClick}
          />)
      }
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
  onShowMoreButtonClick: PropTypes.func.isRequired,
  currentShownFilms: PropTypes.number.isRequired,
};
