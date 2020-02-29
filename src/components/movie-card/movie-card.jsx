import React from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";

const MovieCard = (props) => {
  const {promoMovieCover: {TITLE, GENRE, RELEASE_DATE}, onPromoFilmClick} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div
            className="movie-card__poster"
            onClick={onPromoFilmClick}
          >
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2
              className="movie-card__title"
              onClick={onPromoFilmClick}
            >
              {TITLE}
            </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{GENRE}</span>
              <span className="movie-card__year">{RELEASE_DATE}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  promoMovieCover: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired,
    TITLE: PropTypes.string.isRequired
  }),
  onPromoFilmClick: PropTypes.func.isRequired,
};

export default MovieCard;