import React from "react";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import MoviesList from "@components/movies-list/movies-list";

import {getMovieMark, getSimilarMovies} from "@utils/utils";
import PropTypes from "prop-types";

const MovieDetails = (props) => {
  const {
    movieDetails: {
      TITLE, GENRE, RELEASE_DATE, SCORE, RATING, DESCRIPTION, DIRECTOR, STARRING, POSTER
    },
    films,
    onFilmClick
  } = props;

  const movieMark = getMovieMark(SCORE);

  const similarFilms = getSimilarMovies(GENRE, films);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={POSTER} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{TITLE}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{GENRE}</span>
                <span className="movie-card__year">{RELEASE_DATE}</span>
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
                src={POSTER}
                alt={TITLE}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{SCORE}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{movieMark}</span>
                  <span className="movie-rating__count">{RATING} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{DESCRIPTION}</p>

                <p className="movie-card__director"><strong>Director: ${DIRECTOR}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {STARRING}</strong></p>
              </div>
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

MovieDetails.propTypes = {
  movieDetails: PropTypes.exact({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired,
    POSTER: PropTypes.string.isRequired,
    DESCRIPTION: PropTypes.string.isRequired,
    DIRECTOR: PropTypes.string.isRequired,
    STARRING: PropTypes.string.isRequired,
    SCORE: PropTypes.number.isRequired,
    RATING: PropTypes.number.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default MovieDetails;
