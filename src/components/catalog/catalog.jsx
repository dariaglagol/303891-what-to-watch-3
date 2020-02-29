import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CatalogCard from "@components/catalog-card/calalog-card";

export default class Catalog extends PureComponent {
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
    const {films} = this.props;

    return (
      films.map((film, index) => (
        <CatalogCard
          onFilmCatalogCardHover={this._filmCatalogCardHoverHandler}
          film={film}
          key={`${index}`}
        />
      ))
    );
  }

  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden"> Catalog </h2>
        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>
        <div className="catalog__movies-list">
          {this._renderFilmCatalogCards()}
        </div>
        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired
};
