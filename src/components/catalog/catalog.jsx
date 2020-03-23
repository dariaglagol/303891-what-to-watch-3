import React from "react";
import PropTypes from "prop-types";
import MoviesList from "@components/movies-list/movies-list";
import GenresList from "@components/genres-list/genres-list";
import ShowMoreButton from "@components/show-more-button/show-more-button";

const Catalog = (props) => {
  const {
    films,
    activeGenre,
    onGenreTabClick,
    onShowMoreButtonClick,
    currentShownFilms,
    resetShownFilms,
    renderMovieList,
  } = props;

  const isButtonHide = films.length <= currentShownFilms;

  function _onTabClick(genre) {
    resetShownFilms();
    onGenreTabClick(genre);
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden"> Catalog </h2>
      <GenresList
        onGenreTabClick={_onTabClick}
        activeGenre={activeGenre}
      />
      {renderMovieList(currentShownFilms)}
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
  activeGenre: PropTypes.exact({
    multiply: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
  }).isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  resetShownFilms: PropTypes.func.isRequired,
  renderMovieList: PropTypes.func.isRequired,
  currentShownFilms: PropTypes.number.isRequired,
};
