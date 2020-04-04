import React from "react";
import PropTypes from "prop-types";
import GenresList from "@components/genres-list/genres-list";
import ShowMoreButton from "@components/show-more-button/show-more-button";
import {getGenres} from "@utils/utils";

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

  const isButtonHide = films && films.length <= currentShownFilms;

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
        genreList={getGenres(films)}
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
  films: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    })),
    PropTypes.shape([]).isRequired,
  ]).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  resetShownFilms: PropTypes.func.isRequired,
  renderMovieList: PropTypes.func.isRequired,
  currentShownFilms: PropTypes.number.isRequired,
};
