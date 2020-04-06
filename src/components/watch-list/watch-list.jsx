import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Footer from "@components/footer/footer";
import {AppRoute} from "@utils/constants";

export default class WatchList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadWatchFilm} = this.props;

    loadWatchFilm();
  }

  _renderFilms() {
    const {films, renderMovieList} = this.props;

    if (!films.length) {
      return (<p>Nothing to watch...</p>);
    }

    return renderMovieList(films.length);
  }

  render() {
    const {userData} = this.props;

    const {avatarUrl, name} = userData;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={avatarUrl} alt={name} width="63" height="63"/>
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {this._renderFilms()}
        </section>

        <Footer />
      </div>
    );
  }
}

WatchList.propTypes = {
  films: PropTypes.oneOfType([
    PropTypes.exact([]).isRequired,
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
    })).isRequired,
  ]).isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  renderMovieList: PropTypes.func.isRequired,
  loadWatchFilm: PropTypes.func.isRequired,
};
