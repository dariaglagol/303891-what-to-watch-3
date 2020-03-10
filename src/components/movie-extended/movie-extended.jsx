import React from "react";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import MoviesList from "@components/movies-list/movies-list";
import Tabs from "@components/tabs/tabs";
import PropTypes from "prop-types";
import {getSimilarMovies} from "@utils/utils";

const MovieExtended = (props) => {
  const {
    movieDetails: {
      title, genre, releaseDate, poster
    },
    films,
    onFilmClick,
    activeTab
  } = props;

  const similarFilms = getSimilarMovies(genre, films);

  function _renderActiveTab() {
    // switch (activeTab) {
    //   case ``:
    //
    // }
  }

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={poster} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
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
                alt={title}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <Tabs />

              {_renderActiveTab()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList
            films={similarFilms}
            onFilmClick={onFilmClick}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MovieExtended.propTypes = {
  movieDetails: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default MovieExtended;
