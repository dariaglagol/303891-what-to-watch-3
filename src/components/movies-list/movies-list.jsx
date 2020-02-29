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
      activeFilm: film
    });
  }

  _renderFilmCatalogCards() {
    const {films, onFilmClick} = this.props;

    return (
      films.map((film, index) => (
        <CatalogCard
          onFilmCatalogCardHover={this._filmCatalogCardHoverHandler}
          onFilmClick={onFilmClick}
          film={film}
          key={`${index}`}
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
    posterUrl: PropTypes.string.isRequired
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired
};
