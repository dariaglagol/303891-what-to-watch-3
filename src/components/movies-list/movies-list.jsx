import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "@components/catalog-card/calalog-card";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {sliceMovieArray} from "@utils/utils";

const WrappedMovieCard = withVideoPlayer(CatalogCard);

const MoviesList = (props) => {
  function _isFilmActive(activeFilm, film) {
    return activeFilm && activeFilm.title === film.title || false;
  }

  function _renderFilmCatalogCards() {
    const {films, onFilmClick, onFilmCatalogCardHover, activeFilm, currentShownFilms} = props;
    const filmsToShow = sliceMovieArray(films, currentShownFilms);

    return (
      filmsToShow.map((film, index) => (
        <WrappedMovieCard
          onFilmCatalogCardHover={onFilmCatalogCardHover}
          onFilmClick={onFilmClick}
          isPlaying={_isFilmActive(activeFilm, film)}
          film={film}
          key={`${film.title}-${index}`}
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
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  activeFilm: PropTypes.oneOfType([
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }).isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  currentShownFilms: PropTypes.number.isRequired,
};
