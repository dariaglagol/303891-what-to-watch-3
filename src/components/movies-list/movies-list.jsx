import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "@components/catalog-card/calalog-card";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {sliceMovieArray} from "@utils/utils";

const WrappedMovieCard = withVideoPlayer(CatalogCard);

const MoviesList = (props) => {
  function _isFilmActive(activeFilm, film) {
    return activeFilm && activeFilm.id === film.id || false;
  }

  function _renderFilmCatalogCards() {
    const {
      films,
      onFilmCatalogCardHover,
      activeFilm,
      currentShownFilms
    } = props;

    if (!films) {
      return null;
    }

    const filmsToShow = sliceMovieArray(films, currentShownFilms);

    return (
      filmsToShow.map((film) => (
        <WrappedMovieCard
          onFilmCatalogCardHover={onFilmCatalogCardHover}
          isPlaying={_isFilmActive(activeFilm, film)}
          film={film}
          key={`${film.title}-${film.id}`}
        />
      ))
    );
  }

  return (
    <div className="catalog__movies-list">
      {_renderFilmCatalogCards()}
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
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
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  activeFilm: PropTypes.oneOfType([
    PropTypes.exact({
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
    }),
    PropTypes.shape({}).isRequired,
  ]),
  currentShownFilms: PropTypes.number.isRequired,
};
