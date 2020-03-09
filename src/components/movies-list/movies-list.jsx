import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CatalogCard from "@components/catalog-card/calalog-card";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };

    this._filmCatalogCardHoverHandler = this._filmCatalogCardHoverHandler.bind(this);
  }

  _filmCatalogCardHoverHandler(film) {
    this.setState({
      activeFilm: film || null
    });
  }

  _isFilmActive(activeFilm, film) {
    return activeFilm && activeFilm.title === film.title || false;
  }

  _renderFilmCatalogCards() {
    const {films, onFilmClick} = this.props;
    const {activeFilm} = this.state;

    return (
      films.map((film) => (
        <CatalogCard
          onFilmCatalogCardHover={this._filmCatalogCardHoverHandler}
          onFilmClick={onFilmClick}
          isPlaying={this._isFilmActive(activeFilm, film)}
          film={film}
          key={`${film.title}`}
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
  onFilmClick: PropTypes.func.isRequired
};
