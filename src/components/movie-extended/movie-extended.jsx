import React from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import MovieDetails from "@components/movie-extended/blocks/movie-details/movie-details";
import MovieOverview from "@components/movie-extended/blocks/movie-overview/movie-overview";
import MovieReviews from "@components/movie-extended/blocks/movies-reviews/movies-reviews";
import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {getSimilarMovies} from "@utils/utils";
import {TabTypes, DEFAULT_SHOWN_FILMS, FULLSCREEN_VIDEO_CLASS} from "@utils/constants";

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
  } = props;

  const {
    name,
    genre,
    releaseDate,
    poster,
    director,
    starring,
    runTime,
    score,
    rating,
    description
  } = movieDetails;

  const similarFilms = getSimilarMovies(genre, films);

  function _renderTabsText() {
    switch (activeTab) {
      case TabTypes.OVERVIEW:
        return <MovieOverview
          director={director}
          starring={starring}
          runTime={runTime}
          releaseDate={releaseDate}
          genre={genre}
        />;
      case TabTypes.DETAILS:
        return <MovieDetails
          score={score}
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

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={poster} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
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
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={poster}
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
  movieDetails: PropTypes.exact({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.exact({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
  onFilmClick: PropTypes.func.isRequired,
  renderTabs: PropTypes.func.isRequired,
  renderMovieList: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
};

export default MovieExtended;
