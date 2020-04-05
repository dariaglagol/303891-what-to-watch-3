import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import MovieDetails from "@components/movie-extended/blocks/movie-details/movie-details";
import MovieOverview from "@components/movie-extended/blocks/movie-overview/movie-overview";
import MovieReviews from "@components/movie-extended/blocks/movies-reviews/movies-reviews";
import {findFilm, getRoute, getSimilarMovies} from "@utils/utils";
import {
  TabTypes,
  DEFAULT_SHOWN_FILMS,
  AuthorizationStatus,
  AppRoute,
  FilmStatusFavorite
} from "@utils/constants";

export default class MovieExtended extends PureComponent {
  constructor(props) {
    super(props);

    this._addToFavoriteButtonClickHandler = this._addToFavoriteButtonClickHandler.bind(this);
  }

  componentWillMount() {
    const {
      films,
      match: {params},
      onFilmLoad
    } = this.props;

    const film = findFilm(films, params.id);

    onFilmLoad(film);
  }

  componentDidUpdate(prevProps) {

    const {
      films,
      match: {params},
      onFilmLoad
    } = this.props;
    const film = findFilm(films, params.id);
    const prevFilm = findFilm(prevProps.films, params.id);

    if (prevFilm.id !== film.id) {
      onFilmLoad(film);
    }
  }

  _renderTabsText(film) {
    const {reviews, activeTab} = this.props;

    const {
      genre,
      released,
      director,
      starring,
      runTime,
      scoresCount,
      rating,
      description,
    } = film;

    switch (activeTab) {
      case TabTypes.OVERVIEW:
        return <MovieOverview
          director={director}
          starring={starring}
          runTime={runTime}
          released={released}
          genre={genre}
        />;
      case TabTypes.DETAILS:
        return <MovieDetails
          scoresCount={scoresCount}
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />;
      case TabTypes.REVIEWS:
        return <MovieReviews
          reviews={reviews}
        />;
    }

    return null;
  }

  _renderAddReviewButton(film) {
    const {authStatus} = this.props;
    const {id} = film;

    if (authStatus === AuthorizationStatus.AUTH) {
      return (
        <Link
          to={getRoute(AppRoute.FILMS, id, AppRoute.REVIEW)}
          className="btn movie-card__button"
        >
          Add review
        </Link>
      );
    }

    return null;
  }

  _addToFavoriteButtonClickHandler(film) {
    const {isFavorite, id} = film;
    const {toggleFilmFavorite} = this.props;

    const statusFavoriteInvert = isFavorite ?
      FilmStatusFavorite.NOT_FAVORITE : FilmStatusFavorite.FAVORITE;

    toggleFilmFavorite(id, statusFavoriteInvert);
  }

  _renderAddToListButton(film) {
    const {authStatus} = this.props;
    const {isFavorite} = film;

    if (authStatus === AuthorizationStatus.AUTH) {
      return (
        <button
          className="btn btn--list movie-card__button" type="button"
          onClick={() => this._addToFavoriteButtonClickHandler(film)}
        >
          {
            isFavorite ? (
              <svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref="#in-list" />
              </svg>
            ) : (
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"/>
              </svg>
            )
          }
          <span>My list</span>
        </button>
      );
    }

    return null;
  }

  render() {
    const {
      films,
      renderTabs,
      renderMovieList,
      userData,
      authStatus,
      match: {params}
    } = this.props;

    const film = findFilm(films, params.id);

    const {
      name,
      genre,
      released,
      posterImage,
      backgroundImage,
      id,
    } = film;

    const similarFilms = getSimilarMovies(genre, films, id);

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header
              userData={userData}
              authStatus={authStatus}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                <div className="movie-card__buttons">

                  <Link to={getRoute(AppRoute.PLAYER, id)}>
                    <button
                      className="btn btn--play movie-card__button"
                      type="button"
                    >
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"/>
                      </svg>
                      <span>Play</span>
                    </button>
                  </Link>

                  {this._renderAddToListButton(film)}

                  {this._renderAddReviewButton(film)}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={posterImage}
                  alt={name}
                  width="218"
                  height="327"
                />
              </div>
              <div className="movie-card__desc">
                {renderTabs()}
                {this._renderTabsText(film)}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            {renderMovieList(DEFAULT_SHOWN_FILMS, similarFilms)}
          </section>

          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

MovieExtended.propTypes = {
  movieDetails: PropTypes.oneOfType([
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
    PropTypes.exact({}).isRequired,
  ]),
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
    })).isRequired,
    PropTypes.shape([]).isRequired,
  ]).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.exact({
    comment: PropTypes.string.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }),
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })),
  onFilmLoad: PropTypes.func.isRequired,
  renderTabs: PropTypes.func.isRequired,
  renderMovieList: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
  toggleFilmFavorite: PropTypes.func.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  authStatus: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.exact({
      id: PropTypes.string.isRequired
    })
  })
};
