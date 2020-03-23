import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CatalogCard from "@components/catalog-card/calalog-card";
import {sliceMovieArray} from "@utils/utils";

export default class MoviesList extends PureComponent {
  _isFilmActive(activeFilm, film) {
    return activeFilm && activeFilm.title === film.title || false;
  }

  _renderFilmCatalogCards() {
    const {films, onFilmClick, onFilmCatalogCardHover, activeFilm, currentShownFilms} = this.props;
    const filmsToShow = sliceMovieArray(films, currentShownFilms);

    return (
      filmsToShow.map((film, index) => (
        <CatalogCard
          onFilmCatalogCardHover={onFilmCatalogCardHover}
          onFilmClick={onFilmClick}
          isPlaying={this._isFilmActive(activeFilm, film)}
          film={film}
          key={`${film.title}-${index}`}
        />
      ))
    );
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this._renderFilmCatalogCards()}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  activeFilm: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  currentShownFilms: PropTypes.number.isRequired,
};
