import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import MovieDetails from "@components/movie-extended/blocks/movie-details/movie-details";
import MovieOverview from "@components/movie-extended/blocks/movie-overview/movie-overview";
import MovieReviews from "@components/movie-extended/blocks/movies-reviews/movies-reviews";
import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {getRoute, getSimilarMovies} from "@utils/utils";
import {
  TabTypes,
  DEFAULT_SHOWN_FILMS,
  FULLSCREEN_VIDEO_CLASS,
  AuthorizationStatus,
  AppRoute,
  FilmStatusFavorite
} from "@utils/constants";

const WrappedFullScreenVideo = withVideoPlayer(FullscreenPlayer);

const MovieExtended = (props) => {
  const {
    movieDetails,
    reviews,
    films,
    renderTabs,
    activeTab,
    renderMovieList,
    onFullScreenToggle,
    isFullscreenPlayerActive,
    userData,
    authStatus,
    onAddReviewClick,
    toggleFilmFavorite,
  } = props;

  const {
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
    director,
    starring,
    runTime,
    scoresCount,
    rating,
    description,
    id,
    isFavorite,
  } = movieDetails;

  const similarFilms = getSimilarMovies(genre, films);

  function _renderTabsText() {
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

  function _getPlayEvent() {
    onFullScreenToggle(!isFullscreenPlayerActive);
  }

  function _renderAddReviewButton() {
    if (authStatus === AuthorizationStatus.AUTH) {
      return (
        <Link
          to={getRoute(AppRoute.REVIEW, id)}
          className="btn movie-card__button"
          onClick={onAddReviewClick}
        >
          Add review
        </Link>
      );
    }

    return null;
  }

  function _addToFavoriteButtonClickHandler() {
    const statusFavoriteInvert = isFavorite ?
      FilmStatusFavorite.NOT_FAVORITE : FilmStatusFavorite.FAVORITE;

    toggleFilmFavorite(id, statusFavoriteInvert);
  }

  function _renderAddToListButton() {
    return (
      <button
        className="btn btn--list movie-card__button" type="button"
        onClick={_addToFavoriteButtonClickHandler}
      >
        {
          isFavorite ? (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"/>
            </svg>
          ) : (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list" />
            </svg>
          )
        }
        <span>My list</span>
      </button>
    );
  }

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
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={_getPlayEvent}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                {_renderAddToListButton()}
                {_renderAddReviewButton()}
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
              {_renderTabsText()}
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

      {isFullscreenPlayerActive &&
        <WrappedFullScreenVideo
          isPlaying={true}
          film={movieDetails}
          className={FULLSCREEN_VIDEO_CLASS}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onExitClick={_getPlayEvent}
        />
      }
    </React.Fragment>
  );
};

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
  onFilmClick: PropTypes.func.isRequired,
  renderTabs: PropTypes.func.isRequired,
  renderMovieList: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
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
};

export default MovieExtended;
